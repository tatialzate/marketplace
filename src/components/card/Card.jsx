import React from 'react';
import './Card.css';

const Card = ({ data, onClick }) => {
  return (
    <div className="card" onClick={ onClick}>
      <div className="card-image-container">
        <img src={data.image} alt={data.title} className="card-image" />
      </div>
      <div className="card-content">
        <p className="card-value">{data.title}</p>
        <div className="card-meta">
          <span className="card-category">{data.category || 'Sin categoría'}</span>
          {data.price !== undefined && (
            <span className="card-price">${data.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
