import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Resgistration from "./components/Registration/Resgistration";
// import SignIn from "./components/SignIn/SignIn";
import CartItems from "./components/CartItems/CartItems";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
{/*           <Route path="/register" element={<Resgistration />} />
          <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/cart" element={<CartItems />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

