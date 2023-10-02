import React, { useState } from 'react';
import TextBoxAlta from '../components/TextBoxAlta';
import Checkbox from '../components/CheckBox';
import Select from '../components/Select';
import FileInput from '../components/FileInput';
import FormButtonAlta from '../components/FormButtonAlta';
import Modal from '../components/Modal';
import './alta.scss';
import { useFormContext } from '../contexts/FormContext';

const AltaContent = () => {
  const { formState, setFormState, errors, formSubmitted } = useFormContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const inputValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

    setFormState((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      console.log('Form submitted successfully');
      setIsModalOpen(true);
    } else {
      console.log('Formulario no válido. Por favor, complete los campos requeridos y corrija los errores.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const categories = [
    { value: 'categoria', label: 'Categorías:' },
    { value: 'hogar', label: 'Hogar' },
    { value: 'electronica', label: 'Electrónica' },
    { value: 'bicicletas', label: 'Bicicletas' },
    { value: 'tv', label: 'TV' },
    { value: 'celulares', label: 'Celulares' },
  ];

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

    return newErrors;
  };

  return (
    <div className="container-formulario">
      <form className='form-alta' method="post" onSubmit={handleSubmit} encType="multipart/form-data">
        <TextBoxAlta
          label="Nombre"
          name="nombre"
          autoFocus
          required
          onChange={handleInputChange}
          error={errors.nombre} 
        />
        <TextBoxAlta
          label="Precio"
          name="precio"
          required
          onChange={handleInputChange}
          error={errors.precio} 
        />
        <Checkbox label="Stock" name="stock" onChange={handleInputChange} />
        <TextBoxAlta
          label="Marca"
          name="marca"
          required
          onChange={handleInputChange}
          error={errors.marca} 
        />
        <TextBoxAlta
          label="Descripción Corta"
          name="descripcionCorta"
          required
          onChange={handleInputChange}
          error={errors.descripcionCorta} 
        />
        <TextBoxAlta
          label="Descripción Larga"
          name="descripcionLarga"
          onChange={handleInputChange}
        />
        <Select label="Categoría" name="categoria" options={categories} onChange={handleInputChange} />
        <Checkbox label="Envío sin Cargo" name="envioSinCargo" onChange={handleInputChange} />
        <FileInput label="Subir Foto" name="imagen" onChange={handleInputChange} />
        <FormButtonAlta formSubmitted={formSubmitted} />
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>Formulario enviado con éxito. Gracias por ingresar un nuevo producto.</p>
      </Modal>
    </div>
  );
};

export default AltaContent;
