import React from 'react';
import { Link } from 'react-router-dom';

const CryptoCard = ({ id, name, symbol, price, change }) => {
  return (
    <div className="crypto-card">
      <h3>{name} ({symbol.toUpperCase()})</h3>
      <p>Prix: <span className="price">${price}</span></p>
      <p className={change > 0 ? 'price' : 'price down'}> {change}%</p>
      <Link to={`/details/${id}`} className="link">Details</Link>
    </div>
  );
};

export default CryptoCard;
