import React from 'react'
import '../componentsStyle/eventBody.css'

export default function EventBody(props) {
    return (
        <div className="eventDetails">
            <h5>{props.eventDetails.label_1}</h5>
            <h5>{props.eventDetails.label_2}</h5>
            <h5>{props.eventDetails.label_3}</h5>
            <h5>{props.eventDetails.label_4}</h5>
            <h5>{props.eventDetails.label_5}</h5>
            <h5>{props.eventDetails.label_6}</h5>
            <h5>{props.eventDetails.label_7}</h5>
            <a className="eventRegistration" href="/silkroad-list">Guest List Registration</a>
            <a className="eventRegistration" href="">Gallery (Post Event)</a>
        </div>
    )
}
