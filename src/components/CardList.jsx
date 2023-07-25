import React from 'react'
import { useEffect, useState } from 'react';
import ProductList from './ProductList.json';
import Cards from './Cards';
import './cards.scss'


const CardList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const data = ProductList;
            setProducts(data);
        };
        fetchData();
    }, []);




    return  (
       

        
                  <div className='card-container'>

                {products.map((product) => (
                    <Cards
                    

                        key={product.id}
                        id={product.id} 
                        imagen={product.imagen}
                        title={product.title}
                        description={product.description}
                        precioanterior={product.precioanterior}
                        precioactual={product.precioactual}

                    />
                )) }


</div>

    );
};


export default CardList;
