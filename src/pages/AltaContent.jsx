import React, { useState } from 'react'
import TextBoxAlta from '../components/TextBoxAlta';
import CheckBox from '../components/CheckBox';
import Select from '../components/Select';
import CheckBox2 from '../components/CheckBox2';
import SubirImagen from '../components/SubirImagen';
import './alta.scss';
import FormButtonAlta from '../components/FormButtonAlta';


const AltaContent = () => {

    const [data, setData]= useState({})
        const cambioTexto =(id, val)=>
        {
            console.log(id, ' => ', val);
            setData({})
        }
    return (
    
  

        <main className="alta-main"> 

        <h1 className='alta-title'>Alta de productos</h1> 
        <div className="container-formulario"> 
        <form className='form-alta' action="codigo.php" method="post" enctype="multipart/form-data">
            <TextBoxAlta cambio={cambioTexto} label='Nombre de Producto'/>
            <TextBoxAlta cambio={cambioTexto}  label='Precio'/>
            <CheckBox cambio={cambioTexto}  label='Stock'/>
            <TextBoxAlta cambio={cambioTexto}  label='Descripción Corta'/>
            <TextBoxAlta cambio={cambioTexto}  label='Descripción larga'/>
            <Select cambio={cambioTexto}  label='Categoría'/>
            <CheckBox2 cambio={cambioTexto}  label='Envío sin Cargo'/>
            <SubirImagen cambio={cambioTexto}  label='Subir Foto'/>
            <FormButtonAlta cambio={cambioTexto}  data={data} />

        </form>
        </div>
        </main>
       
    );
}

export default AltaContent;
