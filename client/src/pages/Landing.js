import React, {useEffect} from 'react'
import '../pageStyles/landing.css'
import AccessCode from '../components/AccessCode'
import CopyrightFooter from '../components/CopyrightFooter'

export default function Landing() {

  useEffect(() => {
    window.scrollTo(0,0);
},[]);

  return (
    <div className='landingContainer'>  
      <div className="landingBody">
        <AccessCode/>
      </div>
      <footer>
        <CopyrightFooter/>
      </footer>
    </div>
  )
}
