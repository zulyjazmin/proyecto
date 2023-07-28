// FormContext.js
import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

const useFormContext = () => useContext(FormContext);

const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    nombre: '',
    precio: '',
    stock: false,
    marca: '',
    descripcionCorta: '',
    descripcionLarga: '',
    categoria: 'categorias',
    envioSinCargo: false,
    subirImagen: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formState.nombre.trim()) {
      newErrors.nombre = 'Complete Nombre';
    }

    if (!formState.precio.trim()) {
      newErrors.precio = 'Complete Precio';
    } else if (isNaN(parseFloat(formState.precio))) {
      newErrors.precio = 'El Precio debe ser un número válido';
    }

    if (!formState.marca.trim()) {
      newErrors.marca = 'Complete Marca';
    }

    if (!formState.descripcionCorta.trim()) {
      newErrors.descripcionCorta = 'Complete Descripción Corta';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      console.log('Form submitted successfully');
      // Implement your submission logic here (e.g., API call, etc.)
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const inputValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

    setFormState((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  return (
    <FormContext.Provider value={{ formState, errors, handleInputChange, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, useFormContext };
