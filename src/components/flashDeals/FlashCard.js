import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import {addToCart} from "../../redux/cart/cartAction";

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
      <span className="material-icons">arrow_right</span>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
      <span className="material-icons">arrow_left</span>
      </button>
    </div>
  )
}

const FlashCard = ({ Data }) => {
  const [count, setCount] = useState(0)

  const state = useSelector((state) => state.cartReducer.cartData);

  console.log("This is state", state);

  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const addCartData = (items) => {
    console.log("Add To Cart", items);
    dispatch(addToCart({items}));
    console.log("This is state", state);
  }

  return (
    <>
      <Slider {...settings}>
        {Data.productItems.map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <div className='rate'>
                  <span className='material-icons' style={{color:"gray",fontSize:20}}>star_rate</span>
                  <span className='material-icons' style={{color:"gray",fontSize:20}}>star_rate</span>
                  <span className='material-icons' style={{color:"gray",fontSize:20}}>star_rate</span>
                  <span className='material-icons' style={{color:"gray",fontSize:20}}>star_rate</span>
                  <span className='material-icons' style={{color:"gray",fontSize:20}}>star_rate</span>
                  </div>
                  <div className='price'>
                    <h4>₹{productItems.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    {/* <button onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus'></i>
                    </button> */}
                    <span className="material-icons" style={{cursor : "pointer"}} onClick={() => addCartData(productItems)}>add</span>
                    {/* <button>

                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard