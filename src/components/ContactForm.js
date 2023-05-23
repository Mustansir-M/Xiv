import React, { useState } from 'react';
import "./ContactStyles.css"

const countries = [
  'Select a Country',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  
];

const ContactForm = ({onClose}) => {
  return (
    <div className="contact-form">
      <div className='contact-form-header'>
        <h3>Contact Us</h3>
        {/* <button>X</button> */}
      <button className="close-button" onClick={onClose}>
      &#10006;
      </button>
      </div>
      <form className='contact-form-modal'>
        <div className="form-row">
          <div className="form-group">
            <label className="labelfor">First Name</label>
            <input
              type="text"
              name="firstName"
              required
            />
          </div>
          <div className="form-group">
          <label className="labelfor">Last Name</label>
            <input
              type="text"
              name="lastName"
             
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
          <label className="labelfor">Work Email</label>
            <input
              type="email"
              name="workEmail"
              
              required
            />
          </div>
          <div className="form-group">
          <label className="labelfor">Business Phone</label>
            <input
              type="tel"
              name="businessPhone"
             
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
          <label className="labelfor">Organization</label>
            <input
              type="text"
              name="organization"
      
              required
            />
          </div>
          <div className="form-group">
          <label>Job Role</label>
            <input
              type="text"
              name="jobRole"
              
              required
            />
          </div>
        </div>
        <div className="form-group">
        <label className="labelfor">Country</label><br></br>
          <select
            name="country"
            placeholder="Select a Country"
            
            required
          >
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
        <label className="labelfor">Your Message</label>
          <textarea
            name="message"

            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
