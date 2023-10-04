import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import './cards.scss';

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/catalogo/productos', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud al servidor');
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card-container">
      {error ? (
        <p>Error al obtener productos desde el servidor: {error}</p>
      ) : (
        products.map((product) => (
          <Cards
            key={product._id}
            imagen={product.imagen}
            title={product.title}
            description={product.description}
            precioanterior={product.precioanterior}
            precioactual={product.precioactual}
          />
        ))
      )}
    </div>
  );
};

export default CardList;
