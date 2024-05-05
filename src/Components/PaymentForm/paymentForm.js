import React, { useState } from 'react';

function PaymentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    cardNumber: '',
    cvc: '',
    expiryDate: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic for processing the payment
    console.log('Form submitted with data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="contactNumber">Contact Number:</label>
        <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
      </div>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="cvc">CVC:</label>
        <input type="text" id="cvc" name="cvc" value={formData.cvc} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
      </div>
      <button type="submit">Pay Now</button>
    </form>
  );
}

export default PaymentForm;
