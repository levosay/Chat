import { ChatMassages, MessageForm } from '@components'
import classes from './Chat.module.sass'

export const Chat = ({ messages, sendMessage }) => {
  return (
    <div className={classes.wrapper}>
      <ChatMassages
        massages={messages}
      />

      <MessageForm
        handlerClick={sendMessage}
      />
    </div>
  )
}
