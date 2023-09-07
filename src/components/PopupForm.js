import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import axios from 'axios'

const PopupForm = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', inputValue);
    setInputValue('');
    onClose();
  };

  const handleRetrieveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const response = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN`
          );
          const areaName = response.data.features[0].place_name;
          setLocation(areaName);
        } catch (error) {
          console.error('Error retrieving location:', error);
        }
      }, (error) => {
        console.error('Error retrieving location:', error);
      });
    } else {
      console.error('Geolocation is not supported in this browser.');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          <RxCross1 />
        </button>
        <h2>Popup Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="locationInput">Enter Location:</label>
          <input
            type="text"
            id="locationInput"
            value={location}
            onChange={handleInputChange}
            placeholder="Enter location"
          />
          <button type="submit" className="find-worker">Submit</button>
        </form>
        <button onClick={handleRetrieveLocation}>Retrieve Location</button>
      </div>
    </div>
  );
};

export default PopupForm;
