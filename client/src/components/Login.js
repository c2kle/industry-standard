import React, { useState } from 'react'
import '../componentsStyle/login.css'

export default function Login() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

const onSubmitHandler = (e) => {
    setUsername(e.target[0].value.toUpperCase())
    setPassword(e.target[1].value.toUpperCase())
}

//THIS IS FOR DEV TESTING PURPOSES :)
if (username === 'SILKROAD' || password === 'ADMIN') {
    return <img src="qr-code-svg.svg" style={{height: 200,width:200}}></img>
}
  return (
    <form  className="login-form" onSubmit={(e) => {e.preventDefault();onSubmitHandler(e)} }>
    <input className="login-form__input" type="password" name="safariSpace" autoComplete="off" disabled></input>
    <div className="login-form__input-div"><label className="login-form__label" name="username-label">Username</label>
    <input className="login-form__input" type="text" name="username" autoComplete="off"></input></div>
    <div className="login-form__input-div"><label className="login-form__label" name="username-label">Password</label>
    <input className="login-form__input" type="password" name="password" autoComplete="off"></input></div>
    
    <div className="login-form__adjust-box">
      <label className="login-form__adjust-box__checkbox-label"><input className="login-form__adjust-box__checkbox-label__checkbox" type="checkbox"></input><span className="login-form__adjust-box__checkbox-label__span">Remember me</span></label>
      <button className="login-form__adjust-box__button"type="submit">SIGN IN</button>
    </div>
    <button className="login-form__enter-button" type="submit"></button>
    <div className="login-form__space-div"><span className="login-form__space-div__span">Register</span><span> | </span><span className="login-form__space-div__span">Forgot password?</span></div>
  </form>
  )
}
