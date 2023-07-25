import React from 'react';
import './header.scss';



/* import amor from '../../public/img/amor.png'; */


const  Header = () => {
    return (
      <>
       
       <header>
              <div className="container-inicial">
              <div className="container-logo"><img className="logo" src={'img/liquishop.png'} alt="logo de liqui shop" />
            </div>
                    
                  <form className="form-contenedor" action="">
                      <label for="">Buscar</label>
                      <input type="text" placeholder=" Search..." />
                      <div className="boton"><button><i id="lupa" className="fa-solid fa-magnifying-glass"></i></button>
                      </div>
                  </form>
                  <div className="registrarme">
                      <a href="#">Registrarme</a>
                      <i className="fa-regular fa-user"></i>
                      <div className="carrito">
                          <i className="fa-solid fa-cart-shopping"></i>
                      </div>
                      <div className="container-corazon">
                          <a href="#"><img className="corazon" src={ 'img/amor.png'} alt="imagen corazon rojo" /></a>
                      </div>
                  </div>
              </div>
          </header>
         
      </>
    );
  };
  
  export default Header;
  