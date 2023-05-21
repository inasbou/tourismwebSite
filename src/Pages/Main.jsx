import React from 'react'
import Avbar from '../Components/Avbar'
import videoBg from '../assets/videoBg.mp4'
const Main = () => {
  return (
    <div>
   <Avbar/>
   <video src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default Main