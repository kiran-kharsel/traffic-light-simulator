import React from 'react'
import './style.css'

function TrafficLight({data}) {
  return (
    <div className='traffic-light'>
        <Light/>
        <Light/>
        <Light/>
    </div>
  )
}

export default TrafficLight


// trafic-light component

function Light(){
    return(
        <div className="light"></div>
    )
}