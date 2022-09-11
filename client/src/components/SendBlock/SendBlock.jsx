import classes from './SendBlock.module.sass'

export const SendBlock = ({ value, handlerClick, btnText }) => {
  const pressKeyLogin = (event) => {
    if (event.key === 'Enter') {
      handlerClick()
    }
  }

  return (
    <div className={classes.wrapper}>
      <input
        className={classes.input}
        ref={value}
        onKeyDown={pressKeyLogin}
        type="text"
      />
      <button
        className={classes.button}
        onClick={handlerClick}
      >
        {btnText}
      </button>
    </div>
  )
}
