import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CartItem.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { deleteFromCart } from "../../redux/cart/cartAction";
const CartItems = () => {
  const state = useSelector((state) => state.cartReducer);
  console.log(state);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    console.log(id);
    dispatch(deleteFromCart(id));
  };
  const subTotal = state.cartData.reduce(
    (accumulator, current) => accumulator + current.items.price,
    0
  );
  console.log(subTotal);
  return (
    <React.Fragment>
      {" "}
      {state.cartData.length > 0 ? (
        <div className="cart-box">
          {" "}
          <div className="cart-items-data">
            {" "}
            {state.cartData.map((value) => {
              console.log(value);
              return (
                <div className="cart-items">
                  {" "}
                  <div className="cart-item-image">
                    <img src={value.items.cover} />{" "}
                  </div>{" "}
                  <div className="cart-action">
                    {" "}
                    <div className="item-name">
                      <h2>{value.items.name}</h2>{" "}
                    </div>{" "}
                    <div className="item-price">
                      <p>{value.items.price} ₹</p>{" "}
                    </div>{" "}
                    <div className="cart-btn">
                      {" "}
                      <button onClick={() => deleteItem(value.items.id)}>
                        Delete
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              );
            })}
          </div>
          <div className="price-box">
            <h2>
              Subtotal ({state.cartData.length}) : {subTotal}RS
            </h2>
            <Link to="/checkout">
              {" "}
              <button>Proceed to Buy</button>{" "}
            </Link>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your Cart is empty</p> <hr />{" "}
          <p>
            The price and availability of items at Retail App are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price. Do you have a
            promotional code? We'll ask you to enter your claim code when it's
            time to pay.{" "}
          </p>{" "}
          <Link to="/">
            <button>Go back</button>{" "}
          </Link>{" "}
        </div>
      )}{" "}
    </React.Fragment>
  );
};
export default CartItems;
