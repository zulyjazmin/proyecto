import React from 'react'
import Header from './Header';
import NavBar from './NavBar';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';
import "./mainLayout.scss";
import '../components/cards.scss';




const MainLayout = () => {
  return (
    <body>
      
     <Header />
     <NavBar/>
     <Aside />
     <Main />
     <Footer />
    
    </body>
  );
};

export default MainLayout;
