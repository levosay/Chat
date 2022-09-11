import { Message } from '@components'
import classes from './ChatMassages.module.sass'

export const ChatMassages = ({massages}) => {
  const massageList = massages &&
    massages.map(mess =>
      <Message
        key={mess.id}
        author={mess.username}
        message={mess.message}
      />
    )

  console.log('massages ', massages)

  return (
    <div className={classes.wrapper}>
      {massageList}
    </div>
  )
}
