import "./Vdo_mainStyle.css"
import React from 'react'
import HeadComp from '../Components/Vdo_header'
import VdoComp from '../Components/Vdo_box'
// import Vdoplayer from '../Components/reactVdoPlayer '
import HeaderImg from '../images/workout-18.jpg'

import { YVIDEOS} from "../Yvideos"

const Vdo_main = () => {
  return (
    <div>
      <HeadComp image={HeaderImg} text={'FITNESS VIDEOS'}/>
        <p className="vdo-cont-tit-1">CALISTHENICS WORKOUTS</p>
      <div className="videos-container-1">
      <VdoComp
         vdo = {YVIDEOS[0]}
      />
        <VdoComp
         vdo = {YVIDEOS[1]}
      />
        <VdoComp
         vdo = {YVIDEOS[2]}
      />
        <VdoComp
         vdo = {YVIDEOS[3]}
      />
       <VdoComp
         vdo = {YVIDEOS[4]}
      />
        <VdoComp
         vdo = {YVIDEOS[5]}
      />
        <VdoComp
         vdo = {YVIDEOS[6]}
      />
        <VdoComp
         vdo = {YVIDEOS[7]}
      />
      </div>
      
    </div>
  )
}

export default Vdo_main
