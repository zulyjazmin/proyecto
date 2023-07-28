import React from 'react';

import NavBar from '../layout/NavBar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import NosotrosContent from './NosotrosContent';
import SocialMedia from '../components/SocialMedia';
import { SearchProvider } from '../Search/SearchContext';


const Nosotros = () => {
  return (
    <div>
       <SearchProvider> 
    <Header />
    </SearchProvider>
    <NavBar />
    <NosotrosContent />
    <SocialMedia />
    <Footer />
    </div>
  )
}

export default Nosotros;
