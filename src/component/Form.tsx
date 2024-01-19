import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formStyle: React.CSSProperties = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '70px',
  backgroundColor:'#E8E3CF'
 
  // backgroundColor:'#f4a460',
  // background-color: #f4a460;

};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px',
  margin: '8px 0',
  boxSizing: 'border-box',
};

const textareaStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px',
  margin: '8px 0',
  boxSizing: 'border-box',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#523821',
  color: 'white',
  padding: '12px 25px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft:'160px',
  fontSize:'18px'
  // background-color: '#523821';
  // color: #fff;
  // padding: 12px 20px;
  // font-size: 18px;
  // cursor: pointer;
  // border: none;
  // border-radius: 5px;
  
};


function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function handleClick() {
    navigate('/bill');
    
    // alert("your coffee is orderd :)")
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Save to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    localStorage.setItem('message', message);
    

    navigate('/bill');
  };

  return (
    <div style={formStyle}>
      <h1>Details Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          style={inputStyle}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          style={inputStyle}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          style={textareaStyle}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit" style={buttonStyle} className='handleClick()'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
