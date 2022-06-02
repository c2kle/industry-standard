import React from 'react'
import '../componentsStyle/eventBody.css'

export default function EventBody() {
    return (
        <div className="eventDetails">
            <h5>Venue: TBA</h5>
            <h5>Date: Start of Fall Semester</h5>
            <h5>Time: 10:00pm - 2:00am</h5>
            <h5>Cover: TBA </h5>
            <h5>Hosts: TBA</h5>
            <h5>Restrictions: 18+</h5>
            <h5>DJ: TBA</h5>
            <h5>Contact: silkroad@guestlist.vip</h5>
            <a className="eventRegistration" href="/silkroad-list">Guest List Registration</a>
        </div>
    )
}
