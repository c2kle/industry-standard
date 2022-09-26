import React, { useEffect, useState } from 'react'
import '../pageStyles/landing.css'
import AccessCode from '../components/AccessCode'
import CopyrightFooter from '../components/CopyrightFooter'
import Event from './Event'
import List from './List'

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

  console.log(displayState);
  return (
    <div className='landingContainer'>
      <div className="landingBody">
        {displayState.display === "Access Code" ? <AccessCode setDisplayState={setDisplayState} /> : displayState.display === "Event" ? <Event displayDetails={displayState} setDisplayState={setDisplayState}/> : displayState.display === "Guest Registration" ? <List setDisplayState={setDisplayState}/> : <AccessCode setDisplayState={setDisplayState} />}
      </div>
      <footer>
        <CopyrightFooter />
      </footer>
    </div>
  )
}
