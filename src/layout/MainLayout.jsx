import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';
import "./mainLayout.scss";
import '../components/cards.scss';
import { SearchProvider } from '../Search/SearchContext'; 

const MainLayout = () => {
  return (
    
      <SearchProvider>
        <Header />
        <NavBar />
        <Aside />
        <Main />
      
        <Footer />
      </SearchProvider>
    
  );
};

export default MainLayout;
