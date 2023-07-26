import React from 'react'
import './form-button-alta.scss';

const FormButtonAlta = ({ data }) => (
  <div className="boton">
    <input  value="Enviar" onClick={(e) => console.log(data)} />
     
    
  </div>
)


export default FormButtonAlta;
