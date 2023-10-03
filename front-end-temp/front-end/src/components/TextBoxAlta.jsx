import React from 'react';
import { useFormContext } from '../contexts/FormContext';

const TextBoxAlta = ({ label, name, required = true, autoFocus = false }) => {
  const { formState, handleInputChange, errors, formSubmitted } = useFormContext();

  const validateField = () => {
    if (name === 'precio' && formState[name].trim() !== '') {
      if (!isNaN(parseFloat(formState[name]))) {
        return null;
      } else {
        return 'Por favor, Introduzca solo números';
      }
    }

    if (required && !formState[name].trim() && formSubmitted) {
      return `Complete ${label}`;
    }

    return null;
  };

  const fieldValidationMessage = errors[name] || validateField();

  return (
    <div className="datos">
      <label htmlFor={name}>
        {label}
        <input
          type="text"
          name={name}
          value={formState[name]}
          onChange={handleInputChange}
          required={required}
          autoFocus={autoFocus}
        />
      </label>
      {fieldValidationMessage && <p className='error'>{fieldValidationMessage}</p>}
    </div>
  );
};

export default TextBoxAlta;
