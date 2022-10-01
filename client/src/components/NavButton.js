import React, {useState} from 'react'

export default function NavButton(props) {

    const onClick = () => {
        if (props.buttonText === "MENU") {
            props.setMenuVisibility("true")
            props.setButtonText("CLOSE");
        } else if (props.buttonText === "CLOSE") {
            props.setMenuVisibility("false")
            props.setButtonText("MENU")
        }
        
    }

  return (
    <button className="nav-button" type="button" onClick={onClick}>{props.buttonText}</button>
  )
}
