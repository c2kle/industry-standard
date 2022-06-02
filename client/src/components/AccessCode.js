import React from 'react'
import '../componentsStyle/accessCode.css'

import { useNavigate } from "react-router-dom"

export default function AccessCode() {
  let navigate = useNavigate();

  const validateCode = (event) => {

    event.preventDefault();

    if (event.target[0].value.toUpperCase() === 'SILKROAD' || event.target[0].value.toUpperCase() === 'STILLLIFE') {
      navigate('/silkroad')
    }

  }

  return (
    <form onSubmit={validateCode}>
      <input type="text" name="code" autoComplete="off" placeholder="ACCESS CODE" autoFocus></input>
      <div className="adjust-box">
        <button>ENTER</button>
      </div>
    </form>
  )
}
