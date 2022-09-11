import { Chat, LoginForm } from '@components'
import { useConnect } from '@/hooks/useConnect.js'
import '@/App.sass'

function App() {
  const {
    connect,
    sendMessage,
    connected,
    messages,
  } = useConnect()

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
