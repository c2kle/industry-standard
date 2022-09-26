import React, { useEffect, useState } from 'react'
import '../pageStyles/landing.css'
import AccessCode from '../components/AccessCode'
import CopyrightFooter from '../components/CopyrightFooter'
import Event from './Event'
import List from './List'
import HomeFooter from '../components/HomeFooter'

export default function Landing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [displayState, setDisplayState] = useState({
    display: "Access Code",
    event: {
      title: "",
      label_1: "",
      label_2: "",
      label_3: "",
      label_4: "",
      label_5: "",
      label_6: "",
      label_7: "",
    },
  });

  let page;
  let footer;

  if (displayState.display === "Event") {
    page = <Event displayState={displayState} setDisplayState={setDisplayState} />
    footer = <HomeFooter displayState={displayState} setDisplayState={setDisplayState}/>
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
