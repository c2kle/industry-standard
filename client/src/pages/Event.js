import React, { useEffect } from 'react'
import HomeFooter from '../components/HomeFooter'
import '../pageStyles/event.css'
import EventBody from '../components/EventBody'
import EventTitle from '../components/EventTitle'

export default function Event(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='eventContainer'>
      <header>
        <EventTitle title={props.displayDetails.event.title} />
      </header>
      <div className="eventBody">
        <EventBody displayDetails={props.displayDetails} setDisplayState={props.setDisplayState}/>
      </div>
      {/* <footer>
        <HomeFooter/>
      </footer> */}
    </div>
  )
}
