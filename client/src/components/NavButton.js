import React, {useState} from 'react'

export default function NavButton() {

    const [buttonText,setButtonText] = useState("MENU")


    const onClick = () => {
        if (buttonText === "MENU") {
            document.getElementsByClassName("navigationMenu")[0].setAttribute("data-visible","true");
            setButtonText("CLOSE");
        } else if (buttonText === "CLOSE") {
            document.getElementsByClassName("navigationMenu")[0].setAttribute("data-visible","false")
            setButtonText("MENU")
        }
        
    }

  return (
    <button className="navBurger" type="button" onClick={onClick}>{buttonText}</button>
  )
}
