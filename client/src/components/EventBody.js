import React from 'react'
import '../componentsStyle/eventBody.css'

export default function EventBody() {
    return (
        <div className="eventDetails">
            <h5>Event: Mixer</h5>
            <h5>Venue: Down Time Chapel Hill</h5>
            <h5>Date: August 26th (Friday)</h5>
            <h5>Time: 9:00pm - 11:30pm</h5>
            <h5>Cover: $5, $10 (Under 21)</h5>
            <h5>DJ: DJ RUSS, TBA</h5>
            <h5>Contact: silkroad@guestlist.vip</h5>
            <a className="eventRegistration" href="/silkroad-list">Guest List Registration</a>
            <a className="eventRegistration" href="">Gallery (Post Event)</a>
        </div>
    )
}
