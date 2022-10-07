import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../componentsStyle/userDash.css"

export default function UserDash() {

    const navigate =useNavigate();

    const onClickHandler = () => {
        navigate("/user-events")
    }
    return (

        <div className="dash">
            <button className="dash-button" name="events" onClick={onClickHandler}>EVENTS</button>
            <button className="dash-button" name="account">ACCOUNT</button>
        </div>
    )
}
