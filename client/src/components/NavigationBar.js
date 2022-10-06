import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import '../componentsStyle/navigation.css'
import NavButton from './NavButton'

export default function NavigationBar() {

  const navigate = useNavigate()

  const [buttonText, setButtonText] = useState("MENU")
  const [menuVisibility, setMenuVisibility] = useState("false")

  const onLoginClick = () => {
    setMenuVisibility("false");
    setButtonText("MENU");
    navigate("/login");
  }
  const onHomeClick = () => {
    setMenuVisibility("false");
    setButtonText("MENU");
    navigate("/");
    
  }
  const onContactClick = () => {
    setMenuVisibility("false");
    setButtonText("MENU");
    navigate("/contact-us");
  }
  return (
    <><nav className="nav" data-visible={menuVisibility}>
      <ul className="nav__ul">
        <li className="nav__ul__li" onClick={onHomeClick}>Home</li>
        <li className="nav__ul__li">About</li>
        <li className="nav__ul__li" onClick={onContactClick}>Contact</li>
        <li className="nav__ul__li" onClick={onLoginClick}>Login</li>
      </ul>
    </nav><NavButton buttonText={buttonText} setButtonText={setButtonText} setMenuVisibility={setMenuVisibility}/></>
  )
}
