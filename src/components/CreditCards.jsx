import React from 'react'
import './creditCards.scss';


const CreditCards = () => {
  return (
    <div>
      <div className="titulo3">
                <h3>Métodos de pago</h3>
            </div>
            <div className="tarjetas">
                <img className="tarjeta" src={'img/masterd.png'} alt="imagen tarjeta mastercard" />
                <img className="tarjeta" src={'img/visa.png'} alt="imagen tarjeta visa" />
                <img className="tarjeta" src={'img/santander.jpg'} alt="imagen tarjeta santander" />
                <img className="tarjeta" src={'img/itau.png'} alt="imagen tarjeta itau" />
                <img className="tarjeta" src={'img/abitab.jpg'} alt="imagen de logo de abitab" />
                <img className="tarjeta" src={'img/paypal.jpg'} alt="imagen de logo de paypal" />
            </div>
    </div>
  );
};

export default CreditCards;
