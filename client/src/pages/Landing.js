import React, {useEffect,useState} from 'react'
import '../pageStyles/landing.css'
import AccessCode from '../components/AccessCode'
import CopyrightFooter from '../components/CopyrightFooter'
import Event from './Event'

export default function Landing() {

  useEffect(() => {
    window.scrollTo(0,0);
},[]);

  const [args,setArgs] = useState({display: true, title: ""});

const bigQuestion = (args) => {
  setArgs(args)
}

  console.log(args.display);
  return (
    <div className='landingContainer'>  
      <div className="landingBody">
        {args.display === true ? <AccessCode questions={bigQuestion}/> : <Event title={args.title}/>}
      </div>
      <footer>
        <CopyrightFooter/>
      </footer>
    </div>
  )
}
