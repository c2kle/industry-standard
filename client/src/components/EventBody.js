import React from 'react'
import '../componentsStyle/eventBody.css'

export default function EventBody() {
    return (
        <div className="eventDetails">
            <h5>Venue: Down Time</h5>
            <h5>Date: August 26th (Friday)</h5>
            <h5>Time: 9:00pm - 11:30pm</h5>
            <h5>Cover (Under 21): $10</h5>
            <h5>DJ: TBA</h5>
            <h5>Contact: silkroad@guestlist.vip</h5>
            <a className="eventRegistration" href="/silkroad-list">Guest List Registration</a>
        </div>
    )
}
