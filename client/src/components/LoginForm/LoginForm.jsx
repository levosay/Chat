import { useRef } from 'react'
import { SendBlock } from '@components'
import classes from './LoginForm.module.sass'

export const LoginForm = ({ connect }) => {
  const input = useRef('')

  const toLogin = () => {
    if (input.current.value) {
      connect(input.current.value)
    }
  }

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Login</h1>
      <SendBlock
        value={input}
        handlerClick={toLogin}
        btnText="Войти"
      />
    </div>
  )
}
