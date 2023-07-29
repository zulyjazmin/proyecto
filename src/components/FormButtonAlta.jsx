
import React from 'react';
import { useFormContext } from '../contexts/FormContext';
import './form-button-alta.scss';

const FormButtonAlta = () => {
  const { handleSubmit } = useFormContext();

  return (
    <div className="boton-alta">
      <input type="submit" value="Enviar" onClick={handleSubmit} />
    </div>
  );
};

export default FormButtonAlta;
