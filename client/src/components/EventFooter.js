import React from 'react'
import '../componentsStyle/footerLink.css'

export default function Copyright(props) {

  const onClickHandler = () => {
    let name = "display";
    props.setDisplayState(prevState => ({...prevState, [name]: "Guest Registration"}))
  }

  return (
    <span onClick={onClickHandler}>GUEST LIST REGISTRATION</span>
  )
}

