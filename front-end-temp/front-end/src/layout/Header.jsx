import React from 'react';
import './header.scss';
import SearchBar from '../Search/SearchBar';


const Header = () => {

  return (
  
    <header>
      <div className="container-inicial">
        <div className="container-logo">
          <img className="logo" src={'img/liquishop.png'} alt="logo de liqui shop" />
        </div>
 
        
          <SearchBar />
   
         

        <div className="registrarme">
          <a href="#">Registrarme</a>
          <i className="fa-regular fa-user"></i>
          <div className="carrito">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="container-corazon">
            <a href="#"><img className="corazon" src={'img/amor.png'} alt="imagen corazon rojo" /></a>
          </div>
        </div>
      </div>
    </header>
    
  );
};

export default Header;
