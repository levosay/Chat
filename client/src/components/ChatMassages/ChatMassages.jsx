import { Message } from '@components'
import classes from './ChatMassages.module.sass'
import {useEffect} from 'react'

export const ChatMassages = ({ massages }) => {
  const massageList = massages &&
    massages.map(mess =>
      <Message
        key={mess.id}
        author={mess.username}
        message={mess.message}
      />
    )

  const scrollDown = () => {
    const scrollBlock = document.querySelector('#scroll-block')
    scrollBlock.scrollTop = scrollBlock.scrollHeight
  }

  useEffect(() => {
    scrollDown()
  }, [massages])

  return (
    <div className={classes.wrapperScroll}>
      <div id="scroll-block" className={classes.wrapper}>
        {massageList}
      </div>
    </div>

  )
}
