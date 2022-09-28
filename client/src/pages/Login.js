import React from 'react'
import '../pageStyles/login.css'

export default function Login() {
  return (
    <form >
    <input type="text" name="username" autoComplete="off" placeholder="Username" autoFocus></input>
    <input type="text" name="password" autoComplete="off" placeholder="Password" ></input>
    <div className="adjust-box">
      <button type="submit">ENTER</button>
    </div>
  </form>
  )
}
