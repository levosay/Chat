import classes from './Massage.module.sass'

export const Message = ({ author, message }) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.author}>{author}</span>
      <span className={classes.text}>{message}</span>
    </div>
  )
}
