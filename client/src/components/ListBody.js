import React, { useState } from 'react';
import '../componentsStyle/listBody.css';
import { CREATE_GUEST } from "../GraphQL/Mutations";
import { useMutation } from '@apollo/client';

export default function ListBody(props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [instagram, setInstagram] = useState("")
    const [age, setAge] = useState("")
    const [mobile, setMobile] = useState("")
    const [promoter, setPromoter] = useState("")

    const [createGuest, { error, loading }] = useMutation(CREATE_GUEST)

    if (loading) {
        return `Submitting...`
    }
    if (error) {
        return `Submission error! ${error.message}`
    }
    
    const onBackHandler = () => {
        let name = "display";
        props.setDisplayState(prevState => ({...prevState, [name]: "Event"}))
    }


    return (
        <div className="createGuest">
            <form>
                <h3>SILKROAD</h3>
                <input className="listText" type='text' placeholder='First Name'
                    onChange={(event) => { setFirstName(event.target.value) }}></input>
                <input className="listText" type='text' placeholder='Last Name'
                    onChange={(event) => { setLastName(event.target.value) }}></input>
                <input className="listText" type='text' placeholder='@Instagram'
                    onChange={(event) => { setInstagram(event.target.value) }}></input>
                <input className="listText" type='text' placeholder='Age'
                    onChange={(event) => { setAge(event.target.value) }}></input>
                <input className="listText" type='text' placeholder='Mobile # (Optional)'
                    onChange={(event) => { setMobile(event.target.value) }}></input>
                <input className="listText" type='text' placeholder='Promoter (If Applicable)'
                    onChange={(event) => { setPromoter(event.target.value) }}></input>
                <div className="listButtonsContainer">
                    {/* <button className="listButton" type="button" onClick={onBackHandler}>INFO</button> */}
                    <button className="listButton" onClick={(event) => {
                    event.preventDefault(); createGuest({
                        variables:
                            { first_name: firstName, last_name: lastName, instagram: instagram, age: age, mobile: mobile, promoter: promoter }
                    })
                }}
                >SUBMIT</button></div>
            </form>
        </div>
    )
}
