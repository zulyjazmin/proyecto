import React from 'react'
import './cards.scss'; 



const Cards = ({ imagen, title, description, precioanterior, precioactual }) => {
    return (
  
    
       
                <div className="card">
                    <div className="imagen">
                        <img className="size-card"   src={imagen}
                            alt={`Imagen de ${title}`} />
                    </div>
                    <div className="title">
                        <h4>{title}</h4>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                    <div className="precio-anterior"><span>{precioanterior}</span></div>
                    <div className="precio-actual"><span>{precioactual}</span></div>
                    <div className="button-comprar">
                        <button><a href="#">Comprar</a></button>
                    </div>
                </div>
            

                
    );
};
export default Cards;
