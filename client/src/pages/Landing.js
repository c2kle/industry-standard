import React, { useEffect, useState } from 'react'
import '../pageStyles/landing.css'
import AccessCode from '../components/AccessCode'
import CopyrightFooter from '../components/CopyrightFooter'
import Event from './Event'
import List from './List'
import HomeFooter from '../components/HomeFooter'
import EventFooter from '../components/EventFooter'
export default function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [displayState, setDisplayState] = useState({
    display: "Guest Registration",
    event: {
      title: "SILKROAD",
      label_1: "Event: Mixer",
      label_2: "Venue: Down Time Chapel Hill",
      label_3: "Date: TBA",
      label_4: "Time: 9:00pm - 11:30pm",
      label_5: "Cover: $5, $10 (Under 21)",
      label_6: "DJ: DJ RUSS, TBA",
      label_7: "Contact: silkroad@guestlist.vip",
    },
  });

  let page;
  let footer;

  if (displayState.display === "Event") {
    page = <Event displayState={displayState} setDisplayState={setDisplayState} />
    footer = <EventFooter displayState={displayState} setDisplayState={setDisplayState}/>
  }
  else if (displayState.display === "Guest Registration" || displayState.display === "Temporary Create" || displayState.display === "Temporary Channel") {
    page = <List displayState={displayState} setDisplayState={setDisplayState} />
    footer = <HomeFooter displayState={displayState} setDisplayState={setDisplayState} />
  }
  else {
    page = <AccessCode setDisplayState={setDisplayState} />
    footer = <CopyrightFooter />
  }


  return (
    <div className='landingContainer'>
      <div className="landingBody">
        {page}
      </div>
      <footer>
        {footer}
      </footer>
    </div>
  )
}
