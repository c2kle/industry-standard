import React, { useEffect, useState } from 'react'
import '../pageStyles/landing.css'
import AccessCode from '../components/AccessCode'
import CopyrightFooter from '../components/CopyrightFooter'
import Event from './Event'

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

  const passDisplayState = (displayOptions) => {
    setDisplayState(displayOptions)
  }

  console.log(displayState);
  return (
    <div className='landingContainer'>
      <div className="landingBody">
        {displayState.display === "Access Code" ? <AccessCode displayState={passDisplayState} /> : <Event eventDetails={displayState.event} />}
      </div>
      <footer>
        <CopyrightFooter />
      </footer>
    </div>
  )
}
