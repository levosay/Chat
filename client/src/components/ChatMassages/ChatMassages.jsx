import Message from '@components/Message/Message.jsx'
import classes from './ChatMassages.module.sass'

const ChatMassages = ({massages}) => {
  const massageList = massages &&
    massages.map(mes => <Message message={mes}/>)

  return (
    <div className={classes.wrapper}>
      {massageList}
      ChatMassages
    </div>
  )
}

export default ChatMassages
