import React, { useState } from 'react';
import '../componentsStyle/guest.css';
import { CREATE_GUEST } from "../GraphQL/Mutations";
import { useMutation } from '@apollo/client';

export default function ListBody(props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [instagram, setInstagram] = useState("")
    const [age, setAge] = useState("")
    const [mobile, setMobile] = useState("")
    const [promoter, setPromoter] = useState("")
    // const [selectStyle, setSelectStyle] = useState({})

    const [createGuest, { error, loading }] = useMutation(CREATE_GUEST)

    if (loading) {
        return `Submitting...`
    }
    if (error) {
        return `Submission error! ${error.message}`
    }

    const onBackHandler = () => {
        let name = "display";
        props.setDisplayState(prevState => ({ ...prevState, [name]: "Event" }))
    }

    // const onChangeHandler = () => {
    //     setSelectStyle({ color: "whitesmoke" })
    // }

    // const onStyleHandler = () => {
    //     setSelectStyle({ color: (118,118,118) })
    // }


    return (
        <div className="event-sign-up-container">
        <img className="flyer-front" src="flyer.png" width={350}></img>
        <img className="flyer-back" src="flyer-info.png" width={350}></img>

                    <form className="guest-form" >
                        <h3 className="guest-list-title">CRUSH INVITATION</h3>
                <input className="guest-form__input" type='text' placeholder='Name'
                    onChange={(event) => { setFirstName(event.target.value) }}></input>
                {/* <input className="guest-form__input" type='text' placeholder='Last Name'
                    onChange={(event) => { setLastName(event.target.value) }}></input> */}
                {/* <input className="guest-form__input" type='text' placeholder='@Instagram'
                    onChange={(event) => { setInstagram(event.target.value) }}></input> */}
                {/* <input className="guest-form__input" type='text' placeholder='Age'
                    onChange={(event) => { setAge(event.target.value) }}></input> */}
                <input className="guest-form__input" type='text' placeholder='Mobile # or @Instagram'
                    onChange={(event) => { setMobile(event.target.value) }}></input>
                {/* <input className="guest-form__input" type='text' placeholder='Promoter (If Applicable)'
                    onChange={(event) => { setPromoter(event.target.value) }}></input> */}
                {/* <div className="listButtonsContainer"> */}
                    {/* <button className="listButton" type="button" onClick={onBackHandler}>INFO</button> */}
                    <button className="guest-form__submit-button" onClick={(event) => {
                        event.preventDefault(); createGuest({
                            variables:
                                { first_name: firstName, last_name: lastName, instagram: instagram, age: age, mobile: mobile, promoter: promoter }
                        })
                    }}
                    >SUBMIT</button>
                    {/* </div> */}
            </form>
            
            <form className="guest-form" >
                        <h3 className="guest-list-title">GUEST LIST REGISTRATION</h3>
                <input className="guest-form__input" type='text' placeholder='Name'
                    onChange={(event) => { setFirstName(event.target.value) }}></input>
                {/* <input className="guest-form__input" type='text' placeholder='Last Name'
                    onChange={(event) => { setLastName(event.target.value) }}></input> */}
                {/* <input className="guest-form__input" type='text' placeholder='@Instagram'
                    onChange={(event) => { setInstagram(event.target.value) }}></input> */}
                {/* <input className="guest-form__input" type='text' placeholder='Age'
                    onChange={(event) => { setAge(event.target.value) }}></input> */}
                {/* <input className="guest-form__input" type='text' placeholder='Mobile # or @Instagram'
                    onChange={(event) => { setMobile(event.target.value) }}></input> */}
                {/* <input className="guest-form__input" type='text' placeholder='Promoter (If Applicable)'
                    onChange={(event) => { setPromoter(event.target.value) }}></input> */}
                {/* <div className="listButtonsContainer"> */}
                    {/* <button className="listButton" type="button" onClick={onBackHandler}>INFO</button> */}
                    <button className="guest-form__submit-button" onClick={(event) => {
                        event.preventDefault(); createGuest({
                            variables:
                                { first_name: firstName, last_name: lastName, instagram: instagram, age: age, mobile: mobile, promoter: promoter }
                        })
                    }}
                    >SUBMIT</button>
                    {/* </div> */}
            </form>
        </div>

    )
}
