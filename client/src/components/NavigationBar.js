import React from 'react'
import '../componentsStyle/navigationBar.css'

export default function NavigationBar() {
  return (
    <nav className="navigationMenu" data-visible="false">
        <ul>
            <li><span>Home</span></li>
            <li><span>About</span></li>
            <li><span>Login</span></li>
        </ul>
    </nav>
  )
}
