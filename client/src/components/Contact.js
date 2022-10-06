import React,{useState} from 'react'
import "../componentsStyle/contact.css"

export default function Contact() {

    const [textArea,setTextArea] = useState("")
    const onChangeHandler = (e) => {
        console.log(e.target.value)
        setTextArea(e.target.value)
    }

    return (
        <form className="contact-form">
            <div className="contact-form__input-div">
                <label className="contact-form__input-div__label" name="name-label">Name</label>
                <input className="contact-form__input-div__input" type="text" name="name" autoComplete="off"></input></div>
            <div className="contact-form__input-div">
                <label className="contact-form__input-div__label" name="email-label">Email</label>
                <input className="contact-form__input-div__input" type="text" name="email" autoComplete="off"></input></div>
            <div className="contact-form__textarea-div">
                <label className="contact-form__input-div__label" name="message-label">Message</label>
                <textarea className="contact-form__input-div__textarea" type="text" name="message" value={textArea} onChange={onChangeHandler} autoComplete="off" maxLength="480"></textarea></div>
            <button className="contact-form__submit-button" type="submit">SUBMIT</button>
        </form>
    )
}
