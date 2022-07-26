import React from "react";
import "./Navbar.css";
import "material-icons/iconfont/material-icons.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const state = useSelector((state) => state.cartReducer);

  console.log("This is also state", state);

  // React.useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [state]);

  return (
    <div className="nav-container">
      <div className="wrapper">
        <div className="left">
          <h1 className="logo">Retail-App</h1>
        </div>

        <div className="center">
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Type to Search here ... "
            />
            <span
              className="material-icons"
              style={{ color: "gray", fontSize: 20 }}
            >
              search
            </span>
          </div>
        </div>

        <div className="right">
          {/* <Link to="/register"> */}
            <div className="menu-item">REGISTER</div>
          {/* </Link> */}
          {/* <Link to="/signin"> */}
            <div className="menu-item">SIGN IN</div>
          {/* </Link> */}
          <Link to="/cart">
          <div className="menu-item">
            <div className="badge">
              <p>{state.cartData.length}</p>
            </div>
            <span className="material-icons-outlined">shopping_cart</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;