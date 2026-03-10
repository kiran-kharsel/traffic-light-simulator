import React, { useState } from 'react'
import './style.css'

function TrafficLight({data}) {

    const getSortedPositionOrder = sortPositionOrder(data)
    const getSortedLightingOrder = sortLightingOrder(data)
    const [positionOrder, setPositionOrder] = useState(getSortedPositionOrder)
    const [lightingOrder, setLightingOrder] = useState(getSortedLightingOrder)
    const [activeLight, setActiveLight] = useState(0)


    // sort position
    function sortPositionOrder(randomOrder){
        const sortedData = randomOrder.toSorted(function(a,b){
            return a.positionOrder - b.positionOrder
        });

        return sortedData;
    }

    function sortLightingOrder(randomOrder){
        const sortedData = randomOrder.toSorted(function(a,b){
            return a.lightingOrder - b.lightingOrder
        });

        return sortedData;
    }

  return (
    <div className='traffic-light'>
        {
            positionOrder.map((light) => {
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