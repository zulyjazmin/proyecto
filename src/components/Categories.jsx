import React from 'react'
import './categories.scss';

const Categories = () => {
  return (
    <div>
       <h2 segundo-t>Categorías</h2>
            <div className="container-categorias">
                <div className="primer-categoria">
                    <div className="card-categorias"><i className="fa-solid fa-house"></i> <span>Hogar</span></div>
                    <div className="card-categorias"><i className="fa-solid fa-computer"></i><span> Computadoras</span></div>
                    <div className="card-categorias"><i className="fa-solid fa-bicycle"></i> <span>Fitness</span></div>
                </div>
                <div className="segunda-categoria">
                    <div className="card-categorias"><i className="fa-sharp fa-solid fa-mobile"></i><span>Celulares</span></div>
                    <div className="card-categorias"><i className="fa-solid fa-tv"></i> <span>Televisores</span></div>
                    <div className="card-categorias"><i className="fa-solid fa-gamepad"></i> <span>Consolas</span></div>
                </div>
            </div>
    </div>
  );
};

export default Categories;
