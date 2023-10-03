import React, { createContext, useState, useContext } from 'react';

const ValidationContext = createContext();

const ValidationProvider = ({ children }) => {
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');


  
  const validateName = (name) => {
    if (name.trim() === '') {
      setNameError('Ingrese su nombre');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };
 

  const validatePhone = (phone) => {
    if (phone.trim() === '') {
      setPhoneError('Ingrese su teléfono');
      return false;
    } else if (phone.trim().length !== 9) {
      setPhoneError('Ingrese un teléfono de 9 dígitos');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      setEmailError('Introduzca su correo electrónico');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Introduzca un correo electrónico válido');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };
  
  return (
    <ValidationContext.Provider
      value={{ nameError, phoneError, emailError, validateName, validatePhone, validateEmail }}
    >
      {children}
    </ValidationContext.Provider>
  );
};

const useValidation = () => {
  const context = useContext(ValidationContext);
  if (!context) {
    throw new Error('useValidation debe ser usado dentro de ValidationProvider');
  }
  return context;
};

export { ValidationProvider, useValidation };