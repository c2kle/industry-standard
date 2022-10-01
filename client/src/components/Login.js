import React, { useState } from 'react'
import '../componentsStyle/login.css'

export default function Login() {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

const onSubmitHandler = (e) => {
    setUserName(e.target[0].value.toUpperCase())
    setPassword(e.target[1].value.toUpperCase())
}

//THIS IS FOR DEV TESTING PURPOSES :)
if (userName === 'SILKROAD' || password === 'ADMIN') {
    return <img src="qr-code-svg.svg" style={{height: 200,width:200}}></img>
}
  return (
    <form  className="login-form" onSubmit={(e) => {e.preventDefault();onSubmitHandler(e)} }>
    <input className="login-form__input" type="text" name="username" autoComplete="off" placeholder="Username" autoFocus></input>
    <input className="login-form__input" type="text" name="password" autoComplete="off" placeholder="Password" ></input>
    <div className="login-form__adjust-box">
      <button className="login-form__adjust-box__button"type="submit">Remember me</button>
      <button className="login-form__adjust-box__button"type="submit">Forgot password?</button>
    </div>
  </form>
  )
}
