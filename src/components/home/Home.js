import React from 'react'
import './Home.css'
import HeadInfo from '../headinfo/HeadInfo'
import Navbar from '../navbar/Navbar'
import Slider from '../slider/Slider'



const Home = () => {
  return (
    <div className='container'>
        <HeadInfo/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home