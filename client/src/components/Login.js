import React, { useState } from 'react'
import '../componentsStyle/login.css'

export default function Login() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

const onSubmitHandler = (e) => {
    setUsername(e.target[0].value.toUpperCase())
    setPassword(e.target[1].value.toUpperCase())
}

const onClickFocus1 = (e) => {
  e.target.scrollIntoView()
}

const onClickFocus2 = (e) => {
  e.target.scrollTop()
}

const onClickFocus3 = (e) => {
  window.scrollTo(0,0)
  e.target.scrollTop()
}

//THIS IS FOR DEV TESTING PURPOSES :)
if (username === 'SILKROAD' || password === 'ADMIN') {
    return <img src="qr-code-svg.svg" style={{height: 200,width:200}}></img>
}
  return (
    <form  className="login-form" onSubmit={(e) => {e.preventDefault();onSubmitHandler(e)} }>
    <input className="login-form__input" type="text" name="username" autoComplete="off" placeholder="Username" onClick={onClickFocus1}></input>
    <input className="login-form__input" type="password" name="password" autoComplete="off" placeholder="Password" onClick={onClickFocus2}></input>
    <input className="login-form__input" type="text" name="register" autoComplete="off" placeholder="register" onClick={onClickFocus3}></input>
    <div className="login-form__adjust-box">
      <label className="login-form__adjust-box__checkbox-label"><input className="login-form__adjust-box__checkbox-label__checkbox" type="checkbox"></input><span className="login-form__adjust-box__checkbox-label__span">Remember me</span></label>
      <button className="login-form__adjust-box__button"type="submit">Forgot password?</button>
    </div>
    <button className="login-form__enter-button" type="submit">ENTER</button>
  </form>
  )
}
