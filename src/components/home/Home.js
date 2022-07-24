import React from 'react'
import './Home.css'
import HeadInfo from '../headinfo/HeadInfo'
import Navbar from '../navbar/Navbar'
import Slider from '../slider/Slider'
import FlashDeals from '../flashDeals/FlashDeals'
import TopCate from '../top/TopCate'
import NewArrivals from '../newarrivals/NewArrivals'
import Discount from '../discount/Discount'
import Shop from '../shops/Shop'
import Annocument from '../Annocument'
import Wrapper from '../wrapper/Wrapper'
import Footer from '../footer/Footer'



const Home = () => {
  return (
    <div className='container'>
        <HeadInfo/>
        <Navbar/>
        <Slider/>
        <FlashDeals/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop/>
        <Annocument/>
        <Wrapper/>
        <Footer/>
    </div>
  )
}

export default Home