import React, { useEffect } from 'react'
import '../pageStyles/event.css'
import EventBody from './EventBody'
import EventTitle from './EventTitle'

export default function Event(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='eventContainer'>
      <header>
        <EventTitle title={props.displayState.event.title} />
      </header>
      <div className="eventBody">
        <EventBody displayState={props.displayState} setDisplayState={props.setDisplayState}/>
      </div>
    </div>
  )
}
