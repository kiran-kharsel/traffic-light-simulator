import React, { useEffect, useState } from 'react'
import './style.css'

function TrafficLight({data}) {

    const getSortedPositionOrder = sortPositionOrder(data)
    const getSortedLightingOrder = sortLightingOrder(data)


    const [positionOrder, setPositionOrder] = useState(getSortedPositionOrder)
    const [lightingOrder, setLightingOrder] = useState(getSortedLightingOrder)
    const [activeLight, setActiveLight] = useState(positionOrder[0])

    useEffect(()=>{
        setTimeout(() => {
            const currentLightIndex = lightingOrder.findIndex((l)=> l.color === activeLight.color);
            const nextLightIndex = currentLightIndex + 1;
            const nextLight = lightingOrder[nextLightIndex] ?? lightingOrder[0]

            setActiveLight(nextLight)
        }, activeLight.time);
    },[activeLight])


    // sort position
    function sortPositionOrder(randomOrder){
        const sortedData = randomOrder.toSorted(function(a,b){
            return a.positionOrder - b.positionOrder
        });

        return sortedData;
    }

    // sort lighting
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
                    <Light 
                    key={light.id} 
                    color={light.color}
                    activeColor={activeLight.color}/>
                )
            })
        }
    </div>
  )
}

export default TrafficLight


// trafic-light component

function Light({color, activeColor}){
    return(
        <div 
        style={{
            backgroundColor: color,
            opacity: color === activeColor ? 1 : 0.2,
        }}
        className="light"></div>
    )
}