import userEvent from "@testing-library/user-event";
import React from "react";
import "./form.css";

const Form = () => {

    const [formData, setFormData] = React.useState({
        Country: "",
        FullName: "",
        MobileNumber: "",
        Pincode: "",
        House: "",
        Area: "",
        Landmark: "",
        Town: "",
        State: "",
        checkbox:"",
        AddressType:"",
      });
      
    const onSubmit = ()=>{
        console.log(formData)
        setFormData({ Country: "",
        FullName: "",
        MobileNumber: "",
        Pincode: "",
        House: "",
        Area: "",
        Landmark: "",
        Town: "",
        State: "",
        checkbox:"",
        AddressType:"",})
    }
    // console.log(formData)
   
  return (
    <div className="form-container">
      <div className="form">
        <div className="form-title">
          <h3>Add a new address</h3>
          <div>
            <div className="form-box">
              <p>Save time. Autofill your current location.</p>
              <button>Autofill</button>
            </div>

            <div className="details">
              <label for="country">Country/Region:</label>
              <select id="country" name="country" className="details-input" value={formData.Country} 
              onChange={(event)=>{setFormData({...formData, Country: event.target.value})}} >
                <option value="India" >India</option>
                <option value="Korea">Korea</option>
                <option value="United States">United States</option>
                <option value="Nepal">Nepal</option>
                <option value="Russia">Russia</option>
                <option value="Ukraine">Ukraine</option>
              </select>
            </div>
            <div className="details">
              <label>Full Name</label>
              <input type="text" className="details-input" value={formData.FullName} 
              onChange={(event)=>{setFormData({...formData, FullName: event.target.value})}}/>
            </div>
            <div className="details">
              <label>Mobile Number</label>
              <input className="details-input" value={formData.MobileNumber} 
              onChange={(event)=>{setFormData({...formData, MobileNumber: event.target.value})}}/>
            </div>
            <div className="details">
              <label>Pincode</label>
              <input
                className="details-input"
                placeholder="6 digits[0-9] PIN code"
                value={formData.Pincode} 
              onChange={(event)=>{setFormData({...formData, Pincode: event.target.value})}}
              />
            </div>
            <div className="details">
              <label>Flat,House no.,Building,Company,Apartment</label>
              <input className="details-input" type="text" value={formData.House} 
              onChange={(event)=>{setFormData({...formData, House: event.target.value})}}/>
            </div>
            <div className="details">
              <label>Area,street,Sector,Village</label>
              <input className="details-input" value={formData.Area} 
              onChange={(event)=>{setFormData({...formData, Area: event.target.value})}}/>
            </div>
            <div className="details">
              <label>Landmark</label>
              <input className="details-input" value={formData.Landmark} 
              onChange={(event)=>{setFormData({...formData, Landmark: event.target.value})}}/>
            </div>
            <div className="details-col">
              <div className="details">
                <label>Town/City</label>
                <input className="details-input" value={formData.Town} 
              onChange={(event)=>{setFormData({...formData, Town: event.target.value})}}/>
              </div>
              <div className="details">
              <label for="State">State:</label>
              <select id="State" name="State" className="details-input" value={formData.State} 
              onChange={(event)=>{setFormData({...formData, State: event.target.value})}}>
                <option value="Rajasthan" >Rajasthan</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Delhi">Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Bombay">Bombay</option>
              </select>
            </div>
            </div>
            <div className="details">
              <div className="details-check">
                <input className="details-check-input " type="checkbox" value={formData.checkbox} 
              onChange={(event)=>{setFormData({...formData, checkbox: event.target.value})}}/>
                <label className="details-check-input">
                  Make this my default address
                </label>
              </div>
              <div className="details">
                <h2>Add Delivery Instructions</h2>
                <p>Preferences are used to plan your delivery. However,shipments can sometimes arrive early or later than planned.</p>
              </div>
              <div className="details">
              <label for="Address">Address Type</label>
              <select id="Address" name="Address" className="details-input" value={formData.AddressType} 
              onChange={(event)=>{setFormData({...formData, AddressType: event.target.value})}}>
                <option value="select an address type">select an address type</option>
                <option value="home" >home</option>
                <option value = "office">office</option>
              </select>
              </div>
              <div className="details">
              <button className="details-address" onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
