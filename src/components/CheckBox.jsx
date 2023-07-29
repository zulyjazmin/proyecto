
import React from 'react';
import { useFormContext } from '../contexts/FormContext';

const Checkbox = ({ label, name }) => {
  const { formState, handleInputChange } = useFormContext();

  return (
    <div className="datos">
      <label htmlFor={name}>
        {label}
        <input
          type="checkbox"
          name={name}
          checked={formState[name]}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
