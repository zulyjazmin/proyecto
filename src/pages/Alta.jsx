import React from 'react';

import AltaContent from './AltaContent';
import Header from '../layout/Header';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import './alta.scss';
import { SearchProvider } from '../Search/SearchContext';







const Alta = () => {
  return (
    <>
 
 <SearchProvider>
   <Header />
   </SearchProvider>
   <NavBar />
   <AltaContent />
   <Footer />

 

    </>

  );
};

export default Alta;
