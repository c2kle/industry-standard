import React from 'react'
import '../componentsStyle/accessCode.css'
import { useLazyQuery } from '@apollo/client';
import { GET_EVENT } from '../GraphQL/Queries';
import { useState } from 'react';

// import { useNavigate } from "react-router-dom"

export default function AccessCode(props) {
  let results;
  // let navigate = useNavigate();
  const validateCode = (props) => {
    
    // event.preventDefault();
    
    // await getEvent();
    
    if (results.getEvent !== null) {
      let title = "bilbo"
      props.questions({display: false, title: title})
    }
    else {
      console.log(results.getEvent)
    }
    // if (event.target[0].value.toUpperCase() === 'SILKROAD') {
    //   props.display(false)
    //   // navigate('/silkroad')
    // }

  }

  
  const [tester,setTester] = useState("");
  
  const [getEvent, {loading,error,data}] = useLazyQuery(GET_EVENT,{variables: {code: tester},onCompleted: (data)=>{results = data;validateCode(props)}})

  // if (loading) {
  //   return <p>...</p>
  // }

  if (error) {
    return `Error! ${error}`
  }



  return (
    <form onSubmit={(event) => {event.preventDefault();setTester(event.target[0].value.toUpperCase());getEvent()}}>
      <input type="text" name="code" autoComplete="off" placeholder="ACCESS CODE" autoFocus></input>
      <div className="adjust-box">
        <button type="submit">ENTER</button>
      </div>
    </form>
  )
}
