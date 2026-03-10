import React from 'react'
import './style.css'

function TrafficLight({data}) {
  return (
    <div className='traffic-light'>
        {
            data.map((light) => {
                return(
                    <Light key={light.id} color={light.color}/>
                )
            })
        }
    </div>
  )
}

export default TrafficLight


// trafic-light component

function Light({color}){
    return(
        <div 
        style={{
            backgroundColor: color,
        }}
        className="light"></div>
    )
}