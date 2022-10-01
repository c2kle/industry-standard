import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import '../componentsStyle/navigation.css'
import NavButton from './NavButton'

export default function NavigationBar() {

  const navigate = useNavigate()

  const [buttonText, setButtonText] = useState("MENU")
  const [menuVisibility, setMenuVisibility] = useState("false")

  const onLoginClick = () => {
    navigate("/login");
    setMenuVisibility("false");
    setButtonText("MENU");
  }
  const onHomeClick = () => {
    navigate("/");
    setMenuVisibility("false");
    setButtonText("MENU");
    
  }
  return (
    <><nav className="nav" data-visible={menuVisibility}>
      <ul className="nav__ul">
        <li className="nav__ul__li" onClick={onHomeClick}>Home</li>
        <li className="nav__ul__li">About</li>
        <li className="nav__ul__li">Contact</li>
        <li className="nav__ul__li" onClick={onLoginClick}>Login</li>
      </ul>
    </nav><NavButton buttonText={buttonText} setButtonText={setButtonText} setMenuVisibility={setMenuVisibility}/></>
  )
}
