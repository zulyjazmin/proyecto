
import React from 'react';
import { useFormContext } from '../contexts/FormContext';

const TextBoxAlta = ({ label, name, required = true, autofocus = false }) => {
  const { formState, errors, handleInputChange } = useFormContext();

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
          autoFocus={autofocus}
        />
      </label>
      {errors[name] && <p className='error'>{errors[name]}</p>}
    </div>
  );
};

export default TextBoxAlta;
