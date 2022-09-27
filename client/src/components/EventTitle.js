import React from 'react'
import '../componentsStyle/eventTitle.css'

export default function EventHeader(props) {
  return (
    <h3 style={{marginBottom: 20}}>{props.title}</h3>
  )
}

