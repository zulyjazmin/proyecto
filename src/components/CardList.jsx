import React from 'react';
import { useEffect, useState } from 'react';
import ProductList from './ProductList.json';
import Cards from './Cards';
import './cards.scss';
import { useSearch } from '../Search/SearchContext';

const CardList = () => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    const fetchData = () => {
      const data = ProductList;
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

export default CardList;
