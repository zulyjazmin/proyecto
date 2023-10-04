import React from 'react'
import './comments.scss';


const Comments = () => {
  return (
    <div>
      <h2 className="tucompra">Tu compra asegurada</h2>
            <div className="container-comentarios">
                <div className="card-comentario">
                    <div className="container-google">
                        <img src={'img/google.png'} alt="logo de google" />
                    </div>
                    <p>
                        "La compra fue fácil, rápida, y me la trajeron en poco tiempo como dijeron, es un
                        comercio muy serio. La primera vez que compro muchas gracias."
                    </p>
                    <span>Carmen</span>
                </div>
                <div className="card-comentario">
                    <div className="container-google">
                        <img src={'img/google.png'}alt="logo de google" />
                    </div>
                    <p>
                        "Tuve dificultad con la compra, y en seguida se contactaron conmigo y me aclararon
                        mis dudas, asi que quedé muy satisfecha con la buena respuesta."
                    </p> <span>Ana</span>
                </div>
                <div className="card-comentario">
                    <div className="container-google">
                        <img src={'img/google.png'} alt="logo de google" />
                    </div>
                    <p>
                        "Me encantó las compras que hice, porque los productos resultaron tal cual los
                        encargué, el equipo súper amable.Totalmente recomendable."
                    </p> <span>Esteban</span>
                </div>
            </div>
    </div>
  );
};

export default Comments;
