import React from 'react'
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ContactoContent from './ContactoContent';
import './contacto.scss';


import { ValidationProvider } from '../contexts/ValidationContext';
import { SearchProvider } from '../Search/SearchContext';



const Contacto = () => {
  return (
    <>
    <SearchProvider> 
      <Header />
      </SearchProvider>
      <NavBar />
      <ValidationProvider>
        <ContactoContent />
      </ValidationProvider>
      <Footer />
     
    </>
  )
}

export default Contacto;
