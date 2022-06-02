import React, { useEffect } from 'react'
import HomeFooter from '../components/HomeFooter'
import '../pageStyles/event.css'
import EventBody from '../components/EventBody'
import EventTitle from '../components/EventTitle'

export default function Event() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='eventContainer'>
      <header>
        <EventTitle/>
      </header>
      <div className="eventBody">
        <EventBody/>
      </div>
      <footer>
        <HomeFooter/>
      </footer>
    </div>
  )
}
