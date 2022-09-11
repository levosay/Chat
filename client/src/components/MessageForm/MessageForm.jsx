import { useRef } from 'react'
import { SendBlock } from '@components'
import classes from './MessageForm.module.sass'

export const MessageForm = ({ handlerClick }) => {
  const input = useRef('')

  const sendMessage = () => {
    if (input.current.value) {
      handlerClick(input.current.value)

      input.current.value = ''
    }
  }

  return (
    <div className={classes.wrapper}>
      <SendBlock
        value={input}
        handlerClick={sendMessage}
        btnText="Отправить"
      />
    </div>
  )
}
