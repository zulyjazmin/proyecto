import React from 'react'
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ContactoContent from './ContactoContent';
import './contacto.scss';
import { ValidationProvider } from '../contexts/ValidationContext';



const Contacto = () => {
  return (
    <>
      <Header />
      <NavBar />
      <ValidationProvider>
        <ContactoContent />
      </ValidationProvider>
      <Footer />
     
    </>
  )
}

export default Contacto;
