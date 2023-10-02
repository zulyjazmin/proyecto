import React from 'react';
import AltaContent from './AltaContent';
import Header from '../layout/Header';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import './alta.scss';
import { SearchProvider } from '../Search/SearchContext';
import { FormProvider } from '../contexts/FormContext';

const Alta = () => {
  return (
    <>
      <SearchProvider>
        <Header />
      </SearchProvider>
      <NavBar />
      <main className="alta-main">
        <h1 className='alta-title'>Alta de productos</h1>
        <FormProvider>
          <AltaContent />
        </FormProvider>
      </main>
      <Footer />
    </>
  );
};

export default Alta;
