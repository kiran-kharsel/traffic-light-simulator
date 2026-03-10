import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrafficLight from './traffic-light'

const TrafficLights = [
  {
    id: 1,
    color: 'red',
    time: 1500, //in ms
    lightingOrder: 1,
    positionOrder: 1,
  },
  {
    id: 2,
    color: 'yellow',
    time: 1500, //in ms
    lightingOrder: 2,
    positionOrder: 1,
  },
  {
    id: 3,
    color: 'green',
    time: 2000, //in ms
    lightingOrder: 3,
    positionOrder: 1,
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrafficLight data={TrafficLights}/>
    </>
  )
}

export default App
