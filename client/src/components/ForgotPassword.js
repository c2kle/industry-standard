import React from 'react'
import "../componentsStyle/forgotPassword.css"

export default function ForgotPassword() {
    return (
        <div className="fp-div">
            <span className="fp-div__span">Please enter your email address and you will receive a message with instructions on how to reset your password</span>
            <label className="fp-div__label" name="email-label">Email</label>
            <input className="fp-div__input" type="text" name="email" autoComplete="off"></input>
            <button className="fp-div__reset-button">RESET PASSWORD</button>
        </div>
    )
}
