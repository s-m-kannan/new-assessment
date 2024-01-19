import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confirmedImage from '../images/cards.png'; // Use the appropriate image path

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(event.target.value);
  };

  const handleClick = () => {
    navigate('/confirm');
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop: '70px',
    // backgroundColor:'#f4a460',
    backgroundColor:'#E8E3CF'
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as 'column', // Explicitly set the type for flexDirection
    gap: '15px',
    // backgroundColor:'#E8E3CF',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#333',
  };

  const inputStyle = {
    padding: '8px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const submitButtonStyle = {
    backgroundColor: '#523821',
    color: '#fff',
    padding: '12px',
    fontSize: '18px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2>Payment Details</h2>
        <div className="form-group">
          <label style={labelStyle} htmlFor="cardNumber">
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            style={inputStyle as React.CSSProperties}
          />
        </div>
        <div className="form-group">
          <label style={labelStyle} htmlFor="expiryDate">
            Expiry Date:
          </label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            style={inputStyle as React.CSSProperties}
          />
        </div>
        <div className="form-group">
          <label style={labelStyle} htmlFor="cvv">
            CVV:
          </label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            style={inputStyle as React.CSSProperties}
          />
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="submit-button"
          style={{ ...submitButtonStyle }}
        >
          Make Payment
        </button>
      </form>
      <img src={confirmedImage} alt="Confirmation" style={styles.imageStyle} />
    </div>
  );
};

const styles = {
  submitButton: {
    marginTop: '20px',
  },
  imageStyle: {
    width: '100%', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
    marginTop: '20px', // Add spacing below the image
  },
};

export default Payment;
