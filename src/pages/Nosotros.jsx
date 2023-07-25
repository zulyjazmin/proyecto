import React from 'react';
import MainLayout from '../layout/MainLayout';
import NavBar from '../layout/NavBar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import NosotrosContent from './NosotrosContent';
import SocialMedia from '../components/SocialMedia';


const Nosotros = () => {
  return (
    <div>
    <Header />
    <NavBar />
    <NosotrosContent />
    <SocialMedia />
    <Footer />
    </div>
  )
}

export default Nosotros;
