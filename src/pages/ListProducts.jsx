import React, { useState } from 'react';
import { Search } from '../components/search';
import Card from '../components/card/Card';
import axios from 'axios';

export const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (query) => {
    setLoading(true);
    setError(null);
    //`http://localhost:4000/api/product?title=${query}`
    axios.get(`http://localhost:4000/api/product?title=${query}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        setError('No se encontró ningún resultado o la categoría es inválida.');
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const goDetail = (id) => {
    axios.get(`http://localhost:4000/api/product/${id}`)
      .then( response => {
        console.log(response.data);
      })
  }

  return (
    <div>
      <Search onSearch={onSearch} />
      <div className="card-list">
        {loading && <p>Cargando...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {products && products.length > 0 && products.map(product => (
          <Card
            key={product.id}
            data={{
              image: product.image,
              title: product.title,
              category: product.category?.name,
              description: product.description,
              price: product.price
            }}
            onClick={() => goDetail(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
