// BuyerInfo.js
import React, { useState } from 'react';
import './BuyerInfo.css';
import { Link } from 'react-router-dom';

function BuyerInfo({ onClose }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process buyer information (name and address) here
    // You can submit the data to your backend or handle it as needed
    console.log('Buyer Name:', name);
    console.log('Buyer Address:', address);
    // Close the buyer information page
    onClose();
  };

  return (
    <div className="buyer-info-container">
      <h2>Enter Buyer Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
       <Link to = "/payment" ><button type="submit">Pay Now</button></Link> 
      </form>
    </div>
  );
}

export default BuyerInfo;
