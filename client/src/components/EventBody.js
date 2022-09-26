import React from 'react'
import '../componentsStyle/eventBody.css'

export default function EventBody(props) {

    const onClickHandler = () => {
        let name = "display";
        props.setDisplayState(prevState => ({...prevState, [name]: "Guest Registration"}))
    }


    return (
        <div className="eventDetails">
            <h5>{props.displayDetails.event.label_1}</h5>
            <h5>{props.displayDetails.event.label_2}</h5>
            <h5>{props.displayDetails.event.label_3}</h5>
            <h5>{props.displayDetails.event.label_4}</h5>
            <h5>{props.displayDetails.event.label_5}</h5>
            <h5>{props.displayDetails.event.label_6}</h5>
            <h5>{props.displayDetails.event.label_7}</h5>
            <button className="eventRegistration" onClick={onClickHandler}>Guest List Registration</button>
            <button className="eventRegistration" href="">Gallery (Post Event)</button>
        </div>
    )
}
