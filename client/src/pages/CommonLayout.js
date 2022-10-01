import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../pageStyles/commonLayout.css'
import List from '../components/List'
import Login from '../components/Login'
import NavigationBar from '../components/NavigationBar'
import Home from '../components/Home'


export default function CommonLayout() {


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




  return (
    <div className="commonLayoutContainer">
      <NavigationBar />
      <div className="commonLayoutBody">
        {bodyContent}
      </div>
    </div>
  )
}
