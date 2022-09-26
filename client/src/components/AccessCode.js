import React, { useEffect } from 'react'
import '../componentsStyle/accessCode.css'
import { useLazyQuery } from '@apollo/client';
import { GET_EVENT } from '../GraphQL/Queries';
import { useState } from 'react';


export default function AccessCode(props) {


  let results;

  const validateCode = (props) => {
    
    if (results === undefined) {
    }
    else if (results.getEvent !== null) {
      let title = results.getEvent.title;
      let label_1 = results.getEvent.label_1;
      let label_2 = results.getEvent.label_2;
      let label_3 = results.getEvent.label_3;
      let label_4 = results.getEvent.label_4;
      let label_5 = results.getEvent.label_5;
      let label_6 = results.getEvent.label_6;
      let label_7 = results.getEvent.label_7;

      props.setDisplayState({display: "Event", event: {
        title: title,
        label_1: label_1,
        label_2: label_2,
        label_3: label_3,
        label_4: label_4,
        label_5: label_5,
        label_6: label_6,
        label_7: label_7,
      },})
    }
    else {
      console.log(results.getEvent)
    }

  }

  
  const [tester,setTester] = useState("");
  const [tries,setTries] = useState(0);
  
  const [getEvent, {loading,error,data}] = useLazyQuery(GET_EVENT,{variables: {code: tester},fetchPolicy: "no-cache",onCompleted: ()=>{setTries(tries + 1)}})

  useEffect(() => {
    results = data;
    validateCode(props);
  }, [tries]);


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
