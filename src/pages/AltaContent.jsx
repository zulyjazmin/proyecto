import React from 'react';
import { FormProvider } from '../contexts/FormContext';
import TextBoxAlta from '../components/TextBoxAlta';
import Checkbox from '../components/CheckBox';
import Select from '../components/Select';
import FileInput from '../components/FileInput';
import FormButtonAlta from '../components/FormButtonAlta';

const altaContent = () => {
  const categories = [
    { value: 'categoria', label: 'Categorías:' },
    { value: 'hogar', label: 'Hogar' },
    { value: 'electronica', label: 'Electrónica' },
    { value: 'bicicletas', label: 'Bicicletas' },
    { value: 'tv', label: 'TV' },
    { value: 'celulares', label: 'Celulares' },
  ];

  return (
    <FormProvider>
      <div className="container-formulario">
        <form action="codigo.php" method="post" encType="multipart/form-data">
          <TextBoxAlta label="Nombre de Producto" name="nombre" autofocus />
          <TextBoxAlta label="Precio" name="precio" required />
          <Checkbox label="Stock" name="stock" />
          <TextBoxAlta label="Marca" name="marca" required />
          <TextBoxAlta label="Descripción Corta" name="descripcionCorta" required />
          <TextBoxAlta label="Descripción Larga" name="descripcionLarga" />
          <Select label="Categoría" name="categoria" options={categories} />
          <Checkbox label="Envío sin Cargo" name="envioSinCargo" />
          <FileInput label="Subir Foto" name="subirImagen" />
          <FormButtonAlta />
        </form>
      </div>
    </FormProvider>
  );
};

export default altaContent;
