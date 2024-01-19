import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import white from '../images/white.jpeg';
import black from '../images/black.jpeg';

import './Product.css'; // Import your CSS file for additional styles

function Product() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [coffeeName, setCoffeeName] = useState('');

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCoffeeSelection = (event: { target: { value: React.SetStateAction<string> } }) => {
    setCoffeeName(event.target.value);
  };

  const handleClick = () => {
    // Save coffee details to localStorage
    localStorage.setItem('coffeeName', coffeeName);
    localStorage.setItem('quantity', quantity.toString());

    // Navigate to the billing page
    navigate('/form');
  };

  return (
    <div className='main'>
      <h2 className="heading">Enjoy With Coffee</h2>
      <img className="coffee-image" src={white} alt="Esperro Coffee" />
      <div className="select-container">
        <select
          className="form-select"
          onChange={handleCoffeeSelection}
        >
          <option disabled selected value="">
            Choose the coffee
          </option>
          <option value="Espresso">Espresso coffee</option>
          <option value="Cappuccino">Cappuccino coffee</option>
          <option value="Flatwhite">Flatwhite coffee</option>
        </select>
      </div>
      <div className="quantity-container">
        <button className="quantity-button" onClick={decrementQuantity}>
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-button" onClick={incrementQuantity}>
          +
        </button>
      </div>
      <button className="book-button" onClick={handleClick}>
        Book Order
      </button>
    </div>
  );
}

export default Product;
