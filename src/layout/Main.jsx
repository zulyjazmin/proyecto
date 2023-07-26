import React from 'react'

import SocialMedia from '../components/SocialMedia';
import Comments from '../components/Comments'
import CreditCards from "../components/CreditCards";
import Categories from "../components/Categories";
import CardList from '../components/CardList';
import CardList2 from '../components/CardList2';




const Main = () => {
    return (
    
        
            <main> 
            <h2 className="segundo-t">Destacados del Mes</h2>   
     
          <CardList/>
            <h2 className='segundo-t'>Vea lo más buscado</h2>
            <CardList2 />
            
           
            <Categories />
            <SocialMedia />
            <Comments />
            <CreditCards />
            </main>
            
    );
};

export default Main;
