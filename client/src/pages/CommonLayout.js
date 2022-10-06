import React, { useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import '../pageStyles/commonLayout.css'
import ListBody from '../components/ListBody'
import Login from '../components/Login'
import NavigationBar from '../components/NavigationBar'
import Home from '../components/Home'
import Register from '../components/Register'
import ForgotPassword from '../components/ForgotPassword'
import Contact from '../components/Contact'


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
    bodyContent = <ListBody />
  }
  else if (path === "/login") {
    bodyContent = <Login/>
  }
  else if ( path === "/register") {
    bodyContent = <Register/>
  }
  else if (path ==="/forgot-password") {
    bodyContent = <ForgotPassword/>
  }
  else if (path ==="/contact-us") {
    bodyContent = <Contact/>
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
