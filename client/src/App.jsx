import { useRef, useState } from 'react'
import { Chat, LoginForm } from '@components'
import '@/App.sass'

function App() {
  const [messages, setMessages] = useState([])
  const [author, setAuthor] = useState('')
  const [connected, setConnected] = useState(false)
  const socket = useRef()

  const connect = (author) => {
    socket.current = new WebSocket('ws://localhost:5000')

    socket.current.onopen = () => {
      setConnected(true)
      setAuthor(author)

      const message = {
        event: 'connection',
        username: 'Система',
        message: `${author} здесь!`,
        id: Date.now()
      }

      socket.current.send(JSON.stringify(message))
    }

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data)
      setMessages(prev => [...prev, message])
    }

    socket.current.onclose = () => {
      console.log('socket подключение закрыто')
    }

    socket.current.onerror = () => {
      console.log('socket произошла ошибка')
    }
  }

  const sendMessage = (value) => {
    const message = {
      event: 'message',
      message: value,
      username: author,
      id: Date.now()
    }

    socket.current.send(JSON.stringify(message))
  }

  return (
    <div className="App">

      {!connected &&
        <LoginForm
          connect={connect}
        />
      }

      {connected &&
        <Chat
          messages={messages}
          sendMessage={sendMessage}
        />
      }

    </div>
  )
}

export default App
