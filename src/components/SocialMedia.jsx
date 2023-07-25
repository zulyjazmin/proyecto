import React from 'react'
import './socialMedia.scss';

const SocialMedia = () => {
  return (
    <div>
         <div className="titulo3">
                <h3>Sumate a nuestras redes</h3>
            </div>
            <div className="social-media">
                <div className="red-social"><a href="https://www.instagram.com/" title="vinculo a instagram" target="_blank"><i
                            className="fa-brands fa-instagram"></i></a></div>
                <div className="red-social"><a href="https://es-la.facebook.com/" title="vinculo a facebook" target="_blank"><i
                            className="fa-brands fa-facebook"></i></a></div>
                <div className="red-social"><a href="https://twitter.com/?lang=es" title="vinculo a twitter" target="_blank"><i
                            className="fa-brands fa-twitter"></i></a></div>
                <div className="red-social"><a href="https://www.whatsapp.com/?lang=es" title="vinculo a whatsapp"
                        target="_blank"><i className="fa-brands fa-whatsapp"></i></a></div>
            </div>
    </div>
  );
};

export default SocialMedia;
