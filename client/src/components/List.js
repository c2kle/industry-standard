import React, { useEffect } from 'react'
import "../componentsStyle/list.css"
import ListBody from './ListBody';
import CreateBody from './CreateBody';

export default function List(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let body;

  if (props.displayState.display === "Guest Registration") {
    body = <ListBody setDisplayState={props.setDisplayState}/>
  }
  else if (props.displayState.display === "Temporary Create" || props.displayState.display === "Temporary Channel") {
    body = <CreateBody displayState={props.displayState}setDisplayState={props.setDisplayState}/>
  }

  return (
    <div className="listContainer">
      <div className="listBody">
        {body}
      </div>
    </div>
  )
}
