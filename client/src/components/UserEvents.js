import React from 'react'
import "../componentsStyle/userEvents.css"
export default function UserEvents() {
  return (
    <div className="user-events-container">
        <button className="user-events-button" name="create-event">+ Create Event</button>
        <button className="user-events-button">SILKROAD</button>
        <button className="user-events-button">#Halloweekend</button>
        <button className="user-events-button">1/24/2023</button>
    </div>
  )
}
