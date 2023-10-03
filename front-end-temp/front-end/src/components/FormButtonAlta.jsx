import React, { useState } from 'react';
import Modal from '../components/Modal';
import { useFormContext } from '../contexts/FormContext';

const FormButtonAlta = () => {
  const { formState, setFormSubmitted, errors } = useFormContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.marca.trim()) {
      setFormSubmitted(true); 
      return;
    }

   
    if (!formState.nombre.trim()) {
      setFormSubmitted(true); 
      return;
    }

  
    if (!formState.descripcionCorta.trim()) {
      setFormSubmitted(true); 
      return;
    }

    
    try {
      const formData = new FormData();

      for (const key in formState) {
        if (key === 'imagen' && formState[key]) {
          formData.append(key, formState[key]);
        } else if (formState[key] !== null && formState[key] !== undefined) {
          formData.append(key, formState[key]);
        }
      }

      const requestOptions = {
        method: 'POST',
        body: formData,
      };

      const response = await fetch('http://localhost:5000/alta', requestOptions);

      if (response.ok) {
        console.log('Datos enviados con éxito');
        setIsModalOpen(true);
      } else {
        console.error('Error al enviar datos al servidor:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error de red al enviar datos al servidor', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="boton-alta">
      <input type="submit" value="Enviar" onClick={handleSubmit} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>Formulario enviado con éxito. 😊</p>
        <p>Gracias por ingresar un nuevo producto.</p>
      </Modal>
  
      {errors.nombre && <p>{errors.nombre}</p>}
      {errors.marca && <p>{errors.marca}</p>}
      {errors.descripcionCorta && <p>{errors.descripcionCorta}</p>}
    </div>
  );
};

export default FormButtonAlta;
