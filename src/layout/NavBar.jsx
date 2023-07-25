import React from 'react';
import './navBar.scss';

const NavBar = () => {
  // Función para determinar la clase "active" para los enlaces
  const isActiveLink = (link) => {
    return window.location.pathname === link ? 'active' : '';
  };

  return (
    <nav>
      <ul>
        <li>
          <a className={`inicio ${isActiveLink('/')}`} href="/" title="vinculo a inicio">Inicio</a>
        </li>
        <li>
          <a className={`alta ${isActiveLink('/alta')}`} href="/alta" title="vinculo a alta">Alta</a>
        </li>
        <li>
          <a className={`contacto ${isActiveLink('/contacto')}`} href="/contacto" title="vinculo a contacto">Contacto</a>
        </li>
        <li>
          <a className={`nosotros ${isActiveLink('/nosotros')}`} href="/nosotros" title="vinculo a nosotros">Nosotros</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
