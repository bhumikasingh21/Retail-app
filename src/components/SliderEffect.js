import React from 'react';
// import './picture.css';
import Slider from "react-slick";
import picture1 from "../assets/picture1.jpg"
import picture2 from "../assets/picture2.jpg"
import picture3 from "../assets/picture3.jpg"
import picture4 from "../assets/picture4.jpg"
import picture5 from "../assets/picture5.jpg"
import picture6 from "../assets/picture6.jpg"
import picture7 from "../assets/picture7.jpg"

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
    <div style={{marginTop : "10px" ,marginLeft:"30px" }}>
      <Slider {...settings}>
      <div>
        <img src={picture1} style={{ width : "700px", height : "500px" , borderRadius:"5px"}} />
      </div>
      <div>
      <img src={picture2} style={{ width : "700px", height : "500px" , borderRadius:"5px"}} />
      </div>
      <div>
      <img src={picture3} style={{ width : "700px", height : "500px" , borderRadius:"5px"}} />
      </div>
      <div>
      <img src={picture4} style={{ width : "700px", height : "500px" , borderRadius:"5px"}} />
      </div>
      <div>
      <img src={picture5} style={{ width : "700px", height : "500px", borderRadius:"5px"}} />
      </div>
      <div>
      <img src={picture6} style={{ width : "700px", height : "500px", borderRadius:"5px"}} />
      </div>
      <div>
      <img src={picture7} style={{ width : "700px", height : "500px", borderRadius:"5px"}} />
      </div>
    </Slider>
    </div>

  )
}

export default SliderEffect;