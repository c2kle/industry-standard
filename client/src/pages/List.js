import React, { useEffect } from 'react'
import "../pageStyles/list.css"
import ListBody from '../components/ListBody';
import EventFooter from '../components/EventFooter'

export default function List() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="listContainer">
      <div className="listBody">
        <ListBody/>
      </div>
      <footer>
        <EventFooter/>
      </footer>
    </div>
  )
}
