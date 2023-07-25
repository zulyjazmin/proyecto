import React from 'react'
import { useEffect, useState } from 'react';
import ProductList2 from './ProductList2.json';
import Cards from './Cards';
import './cards.scss';


const CardList2 = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        const fetchData = () => {
            const data = ProductList2 ;
            setProducts(data);
        };
        fetchData();
    }, []);

   


    return (
        


        
<div className='card-container'>

             {products.map((product) => ( 
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
