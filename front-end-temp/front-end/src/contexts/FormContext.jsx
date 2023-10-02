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
    imagen: null,
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formState.nombre.trim() && formSubmitted) {
      newErrors.nombre = 'Complete Nombre';
    }

    if (!formState.precio.trim() && formSubmitted) {
      newErrors.precio = 'Complete Precio';
    } else if (isNaN(parseFloat(formState.precio)) && formSubmitted) {
      newErrors.precio = 'El Precio debe ser un número válido';
    }

    if (!formState.marca.trim() && formSubmitted) {
      newErrors.marca = 'Complete Marca';
    }

    if (!formState.descripcionCorta.trim() && formSubmitted) {
      newErrors.descripcionCorta = 'Complete Descripción Corta';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      setFormSubmitted(true);
      console.log('Form submitted successfully');
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
    <FormContext.Provider value={{ formState, errors, handleInputChange, handleSubmit, formSubmitted, setFormSubmitted }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, useFormContext };
