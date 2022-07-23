import React from 'react'
import './Navbar.css'
import 'material-icons/iconfont/material-icons.css';


const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='wrapper'>
      <div className='left'>
      <h1 className='logo'>Retail-App</h1>
      </div>

      <div className='center'> 
      <div className='search-container'>
      <input className='search-input' type='text' placeholder = 'Type to Search here ... '/>
      <span className='material-icons' style={{color:"gray",fontSize:20}}>search</span>
      </div>
      </div>

      <div className='right'> 
      <div className='menu-item'>
      REGISTER  
      </div>
      <div className='menu-item'>
      SIGN IN 
      </div>
      <div className='menu-item'>
      <span className='material-icons-outlined'>shopping_cart</span>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar