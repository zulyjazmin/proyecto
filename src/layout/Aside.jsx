import React from 'react'
import './aside.scss';
import MostrarImagenes from '../components/MostrarImagenes';

const Aside = () => {
  return (
    
      <aside>
            <div className="container-advertiser">
                <div className="advertiser">
                    <div className="frase-advertiser">
                        <h1>DESCUENTOS INCREIBLES HASTA 28 DE JULIO</h1>
                        <div className="title-image">
                            <img className="descuento" src={'/img/40-ciento-descuento-promocion_2227-148.avif'} alt="imagen de 40% en rojo" />
                            <h2 className="t-liquid">LIQUIDACION DE OTOÑO</h2>
                        </div>
                        <div className="ver-mas">
                            <button><a href="#">Ver más</a></button>
                        </div>
                    </div>
                    <img className="primera-imagen" src={'/img/imagen-nueva.png'}  
                        alt="cuatro iphones de distintos colores " />
                </div>
            </div>
        </aside>
    
  );
};

export default Aside;
