// PopupForm.js
import React, { useState } from 'react';
import Select from 'react-select'


import { RxCross1 } from 'react-icons/rx';

const PopupForm = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', inputValue);
    setInputValue('');
    onClose();
  };


  if (!isOpen) {
    return null; // Return null if the popup is closed
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          <RxCross1 />
        </button>
        <h2 style={{marginBottom:"20px"}}>Signup Form</h2>
        <form onSubmit={handleSubmit}>
          <select>
            <option value="">Choose your Area</option>
            <option value="option1">London</option>
            <option value="option2">Manchester</option>
            <option value="option3">Birmingham</option>
            <option value="option4">Portsmouth</option>
            <option value="option5">Coventry</option>
          </select>
          <select >
            <option value="">Choose your Job</option>
            <option value="option1">Clinical</option>
            <option value="option2">Cook</option>
            <option value="option3">Picker/Packer</option>
            <option value="option4">Event Server</option>
            <option value="option5">Busser</option>
          </select>
          <div className='row w-90'>
            <div className='col-lg-5'>
         
          <input type="radio" name="Part-Time" value="Part-Time"/>
          <label > Part-time</label>
         </div>

         <div className='col-lg-5'>
        
          <input type="radio" name="Part-Time" value="Full-Time"/>
          <label > Full-time</label>
          </div>
          </div>
         
          <input
          className='w-100'
          type='text'
          placeholder='Your Qualification'
          value={inputValue}
          onChange={handleInputChange}
          />
         
        
          <button type="submit" className='find-worker'>Submit</button>
        </form>


      </div>
    </div>
  );
};

export default PopupForm;
