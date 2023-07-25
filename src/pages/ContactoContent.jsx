import React from 'react'
import './contacto.scss';
import { useValidation } from '../contexts/ValidationContext';

const ContactoContent = () => {
    
    const { nameError, phoneError, emailError, validateName, validatePhone, validateEmail } = useValidation();

    const handleSubmit = (e) => {
      e.preventDefault();
      const nameInput = e.target.elements.name.value;
      const phoneInput = e.target.elements.phone.value;
      const emailInput = e.target.elements.email.value;
  
      const isNameValid = validateName(nameInput);
      const isPhoneValid = validatePhone(phoneInput);
      const isEmailValid = validateEmail(emailInput);
  
      if (isNameValid && isPhoneValid && isEmailValid) {
       
        console.log('Formulario enviado');
      }
    };
  
    return (

        <main className='contacto-main'>


            <div className="cont-container-title-contacto">
                <h1 className="contacto-title">CONTÁCTANOS</h1>
            </div>
            <div className="container-ppal-contacto">
                <div className="container-image-contacto"><img className="local-l" src={'/img/cartel.png'} alt="Foto exterior de local comercial Liqui Shop" width="800px" /></div>

                <div className="container-form-contacto">
                    <h2>Escríbenos</h2>

                    <form className='contacto-form' action="codigo.php" id="formulario" method="post" onSubmit={handleSubmit}>

                        <label for="nombre" >Nombre</label>
                        <input type="text" name="name" id="nombre"  placeholder="Escribe tu Nombre Completo" />
                           
                        <label for="phone">Teléfono</label>
                        <input type="text" name="phone" id="telefono"  placeholder="099949596" />
                        
                        <label for="email">Email</label>
                        <input type="text" name="email"
                            placeholder="liquishop@gmail.com" />
                            
                        <label for="message">Deja tu Comentario</label>
                        <textarea name="mensaje" cols="30" rows="10" placeholder="Escribe tu Consulta"></textarea>
                        <input type="submit" onclick="return enviarFormulario(); " value="Enviar" id="boton" className="check" />
                        {nameError && <p>{nameError}</p>}
                        {phoneError && <p>{phoneError}</p>}
                        {emailError && <p>{emailError}</p>}
                    </form>
                    

                </div>
            </div>

            <h2 className="t-info">INFORMACIÓN</h2>

            <div className="container-info">

                <div className="container-texto">
                    <div className="info"><i className="fa-sharp fa-solid fa-location-dot"></i><span>18 de Julio 777</span></div>
                    <div className="info"><i className="fa-regular fa-clock"></i><span>Horario de L a V de 10 a 18hs</span></div>
                    <div className="info"><i className="fa-solid fa-phone"></i><span>Teléfono 099949532</span></div>

                </div>
                <div className="image-ubicacion"><img src={'/img/ubicacion.png'} alt="" /></div>

            </div>


        </main>


    );
};
 
export default ContactoContent;
