import React from 'react';
// import './Slider.css';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import Slide from "../assets/slide.jpg";
import Slider1 from "../assets/Slider1.jpg"
import slider2 from "../assets/slider2.jpg"
import slider3 from "../assets/slider3.jpg"

const SliderEffect = () => {

  var settings = {
    dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
  };

  return (
    <div style={{marginTop : "10px"}}>
    {/* <div className='slider-container'>
      <div className='Arrow' >
      <span className='material-icons ' style={{color:"gray",fontSize:60}}>arrow_left</span>
      </div>
      <div className='Arrow'>
      <span className='material-icons ' style={{color:"gray",fontSize:60}}>arrow_right</span>
      </div>
    </div> */}
    {/* <button style={{display : "block", height : "50px"}}>Ctaegories</button> */}
      <Slider {...settings}>
      <div>
        <img src={Slider1} style={{ width : "600px", height : "500px"}} />
      </div>
      <div>
      <img src={slider2} style={{ width : "600px", height : "500px"}} />
      </div>
      <div>
      <img src={slider3} style={{ width : "600px", height : "500px"}} />
      </div>
      <div>
      <img src={slider2} style={{ width : "600px", height : "500px"}} />
      </div>
      <div>
      <img src={slider3} style={{ width : "600px", height : "500px"}} />
      </div>
      <div>
      <img src={Slider1} style={{ width : "600px", height : "500px"}} />
      </div>
    </Slider>
    </div>

  )
}

export default SliderEffect;