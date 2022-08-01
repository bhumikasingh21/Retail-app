
import React, { useState } from "react"
import shopdata from './Sdata'
import {useSelector, useDispatch} from "react-redux";

import {addToCart} from "../../redux/cart/cartAction"
const ShopCart = () => {

  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const increment = () => {

    setCount(count + 1)

  }
  const addCartData = (items) => {

    console.log("Add Cart Data", items);

    dispatch(addToCart({items}));

  }
  return (
    <>
      {shopdata.shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>₹{shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  {/* <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button> */}
                  <span className="material-icons" style={{cursor : "pointer"}} onClick={() => addCartData(shopItems)}>add</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
