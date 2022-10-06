import React from 'react'
import '../componentsStyle/register.css'

export default function Register() {
    return (
        <form className="register-form">
            <div className="register-form__input-div">
                <label className="register-form__input-div__label" name="email-label">Email</label>
                <input className="register-form__input-div__input" type="text" name="email" autoComplete="off"></input></div>
            <div className="register-form__input-div">
                <label className="register-form__input-div__label" name="password-label">Password</label>
                <input className="register-form__input-div__input" type="password" name="password" autoComplete="off"></input></div>
            <div className="register-form__input-div">
                <label className="register-form__input-div__label" name="confirm-password-label">Confirm Password</label>
                <input className="register-form__input-div__input" type="password" name="confirm-password" autoComplete="off"></input></div>
            <div className="register-form__input-div">
                <label className="register-form__input-div__label" name="registration-code-label">Registration Code</label>
                <input className="register-form__input-div__input" type="password" name="registration-code" autoComplete="off"></input></div>
            <button className="register-form__register-button" type="submit">REGISTER</button>
            <span className="register-form__span">By registering an account you agree to our <span className="register-form__span__span" name="terms-of-service">Terms of Service</span> and <span className="register-form__span__span" name="privacy-policy">Privacy Policy</span></span>
        </form>
    )
}
