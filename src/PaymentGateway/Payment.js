import React, { useState } from 'react';
import './Payment.css';

const PaymentGateway = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit payment details
    console.log('Payment details submitted:', formData);
    // Redirect user to payment processing page or another route
    // Example: history.push('/payment-processing');
  };

  return (
    <div className="payment-container">
      <h2>Enter Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentGateway;
