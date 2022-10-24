import React from 'react'
import "../componentsStyle/userEvents.css"
import { useNavigate } from 'react-router-dom';
export default function UserEvents() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/user-event-page")
    }

  return (
    <div className="user-events-div">
        <button className="user-events-div__button" name="create-event">+ Create Event</button>
        <button className="user-events-div__button" onClick={onClickHandler}>SILKROAD</button>
        <button className="user-events-div__button">#Halloweekend</button>
        <button className="user-events-div__button">1/24/2023</button>
    </div>
  )
}
