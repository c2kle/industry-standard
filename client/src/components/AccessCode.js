import React, { useEffect } from 'react'
import '../componentsStyle/accessCode.css'
import { useLazyQuery } from '@apollo/client';
import { GET_EVENT } from '../GraphQL/Queries';
import { useState } from 'react';


export default function AccessCode(props) {


  let results;

  const populateNewState = (eventResults,newDisplay) => {

    props.setDisplayState({
      display: newDisplay, event: {
        title: eventResults.label_1,
        label_1: eventResults.title,
        label_2: eventResults.label_2,
        label_3: eventResults.label_3,
        label_4: eventResults.label_4,
        label_5: eventResults.label_5,
        label_6: eventResults.label_6,
        label_7: eventResults.label_7,
      },
    })
  }

  const validateCode = () => {

    if (results === undefined) {
    }
    else if (results.getEvent.code === "CHANNEL") {
      let eventResults = results.getEvent;

      populateNewState(eventResults,"Temporary Channel");
    }
    else if (results.getEvent.code === "CREATE") {

      let eventResults = results.getEvent;

      populateNewState(eventResults,"Temporary Create");
    }
    else if (results.getEvent !== null) {

      let eventResults = results.getEvent

      populateNewState(eventResults,"Event");
    }
    else {
      console.log(results.getEvent)
    }

  }


  const [tester, setTester] = useState("");
  const [tries, setTries] = useState(0);

  const [getEvent, { loading, error, data }] = useLazyQuery(GET_EVENT, { variables: { code: tester }, fetchPolicy: "no-cache", onCompleted: () => { setTries(tries + 1) } })

  useEffect(() => {
    results = data;
    validateCode();
  }, [tries]);


  // if (loading) {
  //   return <p>...</p>
  // }

  if (error) {
    return `Error! ${error}`
  }



  return (
    <form onSubmit={(event) => { event.preventDefault(); setTester(event.target[0].value.toUpperCase()); getEvent() }}>
      <input type="text" name="code" autoComplete="off" placeholder="ACCESS CODE" autoFocus></input>
      <div className="adjust-box">
        <button type="submit">ENTER</button>
      </div>
    </form>
  )
}
