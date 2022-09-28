import React, { useState } from 'react'
import '../pageStyles/login.css'

export default function Login() {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

const onSubmitHandler = (e) => {
    setUserName(e.target[0].value.toUpperCase())
    setPassword(e.target[1].value.toUpperCase())
}

//THIS IS FOR DEV TESTING PURPOSES :)
if (userName === 'SILKROAD' || password === 'ADMIN') {
    return <img src="qr_test.png" style={{height: 100,width:100}}></img>
}
  return (
    <form  onSubmit={(e) => {e.preventDefault();onSubmitHandler(e)} }>
    <input type="text" name="username" autoComplete="off" placeholder="Username" autoFocus></input>
    <input type="text" name="password" autoComplete="off" placeholder="Password" ></input>
    <div className="adjust-box">
      <button type="submit">ENTER</button>
    </div>
  </form>
  )
}
