import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../pageStyles/commonLayout.css'
import List from '../components/List'
import Login from '../components/Login'
import NavigationBar from '../components/NavigationBar'
import Home from '../components/Home'
import Register from '../components/Register'


export default function CommonLayout() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  let bodyContent;

  let location = useLocation();
  let path = location.pathname

  if (path === "/" || path === "") {
    bodyContent = <Home />
  }
  else if (path === "/86a03b76" || path === "/silkroad" ) {
    bodyContent = <List />
  }
  else if (path === "/login") {
    bodyContent = <Login/>
  }
  else if ( path === "/register") {
    bodyContent = <Register/>
  }




  return (
    <div className="commonLayoutContainer">
      <NavigationBar />
      <div className="commonLayoutBody">
        {bodyContent}
      </div>
    </div>
  )
}
