import userEvent from '@testing-library/user-event'
import React from 'react'
import "./form.css"

const Form = () => {
  return (
    <div className='form-container'>
        <div className='form'>
        <div className='form-title'>
            <h3>Add a new address</h3>
            <div>
            <div className='form-box'>
            <p>Save time. Autofill your current location.</p>
            <button>Autofill</button>
            
        </div>
        <div className='details'>
            <label>Country/Region</label>
            <input className='details-input'></input>
            </div>
        <div className='details'>
            <label>Full Name</label>
            <input type="text" className='details-input'></input>
            </div>
        <div className='details'>
            <label>Mobile Number</label>
            <input type="number" className='details-input'></input>
            </div>
        <div className='details'>
            <label>Pincode</label>
            <input className='details-input' ></input>
            </div>
        <div className='details'>
            <label>Flat,House no.,Building,Company,Apartment</label>
            <input className='details-input' ></input>
            </div>
        <div className='details'>
            <label>Area,street,Sector,Village</label>
            <input className='details-input'></input>
            </div>
        <div className='details'>
            <label>Landmark</label>
            <input className='details-input'></input>
            </div>
        <div className='details-col'>
        <div className='details'>
            <label>Town/City</label>
            <input className='details-input'></input>
            </div>
            <div className='details'>
            <label>State</label>
            <input className='details-input'></input>
            </div>


        </div>

        
        </div>
       
        </div>
      
        </div>
    </div>
  )
}

export default Form