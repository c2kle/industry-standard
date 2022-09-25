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
        <EventTitle title={props.eventDetails.title} />
      </header>
      <div className="eventBody">
        <EventBody eventDetails={props.eventDetails}/>
      </div>
      {/* <footer>
        <HomeFooter/>
      </footer> */}
    </div>
  )
}
