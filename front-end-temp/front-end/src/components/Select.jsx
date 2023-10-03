
import React from 'react';
import { useFormContext } from '../contexts/FormContext';

const Select = ({ label, name, options }) => {
  const { formState, handleInputChange } = useFormContext();

  return (
    <div className="datos contenedor-l-s">
      <label htmlFor={name}>{label}</label>
      <div className="container-select">
        <select
          className="select-box"
          name={name}
          value={formState[name]}
          onChange={handleInputChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="icon-container">
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Select;
