import React, { useState } from 'react';
import '../componentsStyle/listBody.css';
import { CREATE_EVENT } from "../GraphQL/Mutations";
import { useMutation } from '@apollo/client';

export default function CreateBody(props) {

  const [code, setCode] = useState("")
  const [title, setTitle] = useState("")
  const [label_1, setLabel1] = useState("")
  const [label_2, setLabel2] = useState("")
  const [label_3, setLabel3] = useState("")
  const [label_4, setLabel4] = useState("")
  const [label_5, setLabel5] = useState("")
  const [label_6, setLabel6] = useState("")
  const [label_7, setLabel7] = useState("")

  const [createEvent, { error, loading }] = useMutation(CREATE_EVENT)

  if (loading) {
    return `Submitting...`
  }
  if (error) {
    return `Submission error! ${error.message}`
  }

  const onBackHandler = () => {
    let name = "display";
    props.setDisplayState(prevState => ({...prevState, [name]: "Access Code"}))
}

  return (
    <div className="createEvent">
      <form>
        <input className="listText" type='text' placeholder='code' maxLength='200'
          onChange={(event) => { setCode(event.target.value) }}></input>
        <input className="listText" type='text' placeholder='title' maxLength='200'
          onChange={(event) => { setTitle(event.target.value) }}></input>
        <input className="listText" type='text' placeholder='label_1' maxLength='200'
          onChange={(event) => { setLabel1(event.target.value) }}></input>
        <input className="listText" type='text' placeholder='label_2' maxLength='200'
          onChange={(event) => { setLabel2(event.target.value) }}></input>
        <input className="listText" type='text' placeholder='label_3' maxLength='200'
          onChange={(event) => { setLabel3(event.target.value) }}></input>
        <input className="listText" type='text' placeholder='label_4' maxLength='200'
          onChange={(event) => { setLabel4(event.target.value) }}></input>
        <input className="listText" type='text' placeholder='label_5' maxLength='200'
          onChange={(event) => { setLabel5(event.target.value) }}></input>
        <input className="listText" type='text' placeholder='label_6' maxLength='200'
          onChange={(event) => { setLabel6(event.target.value) }}></input>
        <input className="listText" type='text' placeholder='label_7' maxLength='200'
          onChange={(event) => { setLabel7(event.target.value) }}></input>
        <div className="listButtonsContainer"><button className="listButton" type="button" onClick={onBackHandler}>BACK</button><button className="listButton" onClick={(event) => {
          event.preventDefault(); createEvent({
            variables:
              { code: code, title: title, label_1: label_1, label_2: label_2, label_3: label_3, label_4: label_4, label_5: label_5, label_6: label_6, label_7: label_7 }
          })
        }}
        >SUBMIT</button></div>
      </form>
    </div>
  )
}
