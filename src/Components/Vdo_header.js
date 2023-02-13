import React from 'react'
import './Vdo_headerstyle.css'

const Vdo_header = (props) => {
  return (
    <div>
      <div className="header-sec">
        <div className="header-img">
            <img src={props.image} alt="" />
        </div>
        <div className="header-title">
            <h1 className='vdo-text'>{props.text}</h1>
        </div>
      </div>
    </div>
  )
}

export default Vdo_header
