// FormButtonAlta.js
import React from 'react';
import { useFormContext } from '../contexts/FormContext';

const FormButtonAlta = () => {
  const { handleSubmit } = useFormContext();

  return (
    <div className="boton">
      <input type="submit" value="Enviar" onClick={handleSubmit} />
    </div>
  );
};

export default FormButtonAlta;
