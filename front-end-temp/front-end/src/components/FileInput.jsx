import React from 'react';
import { useFormContext } from '../contexts/FormContext';

const FileInput = ({ label, name }) => {
  const { handleInputChange } = useFormContext();

  const handleChange = (e) => {
    // Llama a handleInputChange y pasa el evento (e) como argumento
    handleInputChange(e);
  };

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
        onChange={handleChange}  
      />
    </div>
  );
};

export default FileInput;
