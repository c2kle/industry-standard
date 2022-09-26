import React from 'react'
import '../componentsStyle/footerLink.css'

export default function Copyright(props) {

  const onClickHandler = () => {
    let name = "display";
    props.setDisplayState(prevState => ({...prevState, [name]: "Access Code"}))
  }

  return (
    <span onClick={onClickHandler}>GUESTLIST.VIP</span>
  )
}
