import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Adjust the height as needed
  // backgroundColor: '#523821',
};

const tableContainerStyle: React.CSSProperties = {
  maxWidth: '700px', // Adjust the maximum width as needed
  padding: '60px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#E8E3CF',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
};

const thStyle: React.CSSProperties = {
  backgroundColor: '#523821',
  color: 'white',
  padding: '12px 20px',
  textAlign: 'left',
  fontSize: '18px',
  border: '1px solid #ccc',
};

const tdStyle: React.CSSProperties = {
  padding: '8px',
  border: '1px solid #ccc',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#523821',
  color: 'white',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
  fontSize: '18px',
};

function Billing() {
  const navigate = useNavigate();

  const [name, setName] = useState<string | null>(localStorage.getItem('name') || '');
  const [email, setEmail] = useState<string | null>(localStorage.getItem('email') || '');
  const [phone, setPhone] = useState<string | null>(localStorage.getItem('phone') || '');
  const [address, setAddress] = useState<string | null>(localStorage.getItem('address') || '');
  const [message, setMessage] = useState<string | null>(localStorage.getItem('message') || '');
  const [quantity, setQuantity] = useState<string | null>(localStorage.getItem('quantity') || '1');
  const [coffeeName, setCoffeeName] = useState<string | null>(localStorage.getItem('coffeeName') || '');

  useEffect(() => {
    // Update state when localStorage changes
    setName(localStorage.getItem('name') || '');
    setEmail(localStorage.getItem('email') || '');
    setPhone(localStorage.getItem('phone') || '');
    setAddress(localStorage.getItem('address') || '');
    setMessage(localStorage.getItem('message') || '');
    setQuantity(localStorage.getItem('quantity') || '1');
    setCoffeeName(localStorage.getItem('coffeeName') || '');
  }, []);

  const handleConfirm = () => {
    // Perform any additional actions if needed before confirming
    // ...

    // Navigate to the confirmation page
    navigate('/payment');
  };

  return (
    <div style={containerStyle}>
      <div style={tableContainerStyle}>
        <h1>Confiramtion page</h1>
        <table style={tableStyle}>
          <thead>
            {/* <tr>
              <th style={thStyle}>Field</th>
              <th style={thStyle}>Value</th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Name</td>
              <td style={tdStyle}>{name}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Coffee Name</td>
              <td style={tdStyle}>{coffeeName}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Quantity</td>
              <td style={tdStyle}>{quantity}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Email</td>
              <td style={tdStyle}>{email}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Phone Number</td>
              <td style={tdStyle}>{phone}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Address</td>
              <td style={tdStyle}>{address}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} style={{ textAlign: 'center', padding: '20px' }}>
                <button type="button" style={buttonStyle} onClick={handleConfirm}>
                  Confirm
                </button>
                <button type="button" style={buttonStyle} onClick={() => window.history.back()}>
                  Back
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Billing;
