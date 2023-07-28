// FileInput.js
import React from 'react';
import { useFormContext } from '../contexts/FormContext';

const FileInput = ({ label, name }) => {
  const { handleInputChange } = useFormContext();

  return (
    <div className="datos dato-imagen">
      <label className="l-file" htmlFor={name}>
        <i className="fa-regular fa-image"></i>
        {label}
      </label>
      <input
        className="i-archivo"
        type="file"
        id={name}
        name={name}
        accept="image/*"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FileInput;
