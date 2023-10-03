import React from 'react';
import { useEffect, useState } from 'react';
import ProductList2 from './ProductList2.json';
import Cards from './Cards';
import './cards.scss';
import { useSearch } from '../Search/SearchContext';

const CardList2 = () => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    const fetchData = () => {
      const data = ProductList2;
      setProducts(data);
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-container">
      {filteredProducts.map((product) => (
        <Cards
          key={product.id}
          imagen={product.imagen}
          title={product.title}
          description={product.description}
          precioanterior={product.precioanterior}
          precioactual={product.precioactual}
        />
      ))}
    </div>
  );
};

export default CardList2;
