import React from 'react'
import './Slider.css'

const Slider = () => {
  return (
    <div>
    <div className='slider-container'>
      <div className='Arrow' >
      <span className='material-icons ' style={{color:"gray",fontSize:60}}>arrow_left</span>
      </div>
      <div className='Arrow'>
      <span className='material-icons ' style={{color:"gray",fontSize:60}}>arrow_right</span>
      </div>
    </div>
    </div>
  )
}

export default Slider