import React from 'react'

const MostrarImagenes = () => {

    const images =  
     
    [
   { id: 1, src: process.env.PUBLIC_URL + '/img/liquishop.png', alt: 'Logo' },
   { id: 2, src: process.env.PUBLIC_URL + '/img/abitab.jpg', alt: 'corazon' },
   { id: 3, src: process.env.PUBLIC_URL + '/img/amor.png', alt: 'corazon' },
   { id: 4, src: process.env.PUBLIC_URL + '/img/google.png', alt: 'corazon' },
   { id: 5, src: process.env.PUBLIC_URL + '/img/imagen-nueva.png', alt: 'corazon' },
   { id: 6, src: process.env.PUBLIC_URL + '/img/itau.png', alt: 'corazon' },
   { id: 7, src: process.env.PUBLIC_URL + '/img/masterd.png', alt: 'corazon' },
   { id: 8, src: process.env.PUBLIC_URL + '/img/ocacard.png', alt: 'corazon' },
   { id: 9, src: process.env.PUBLIC_URL + '/img/paypal;jpg', alt: 'corazon' },
   { id: 10, src: process.env.PUBLIC_URL + '/img/santander.jpg', alt: 'corazon' },
   { id: 11, src: process.env.PUBLIC_URL + '/img/visa.png', alt: 'corazon' },
   { id: 12, src: process.env.PUBLIC_URL + '/img/productos/apple-iphone-11-pro-max.jpg', alt: 'corazon' },
   { id: 13, src: process.env.PUBLIC_URL + '/img/productos/apple-iphone-12.jpg', alt: 'corazon' },
   { id: 14, src: process.env.PUBLIC_URL + '/img/productos/auriculares-sony.jpg', alt: 'corazon' },
   { id: 15, src: process.env.PUBLIC_URL + '/img/productos/camara-canon.jpg', alt: 'corazon' },
   { id: 16, src: process.env.PUBLIC_URL + '/img/productos/celular-samsung.jpg', alt: 'corazon' },
   { id: 17, src: process.env.PUBLIC_URL + '/img/productos/chromecast-google.jpg', alt: 'corazon' },
   { id: 18, src: process.env.PUBLIC_URL + '/img/productos/dji-mavic-2-pro.jpg', alt: 'corazon' },
   { id: 19, src: process.env.PUBLIC_URL + '/img/productos/drone-dji.jpg', alt: 'corazon' },
   { id: 20, src: process.env.PUBLIC_URL + '/img/productos/google-nest-mini.jpg', alt: 'corazon' },
   { id: 21, src: process.env.PUBLIC_URL + '/img/productos/lavarropas-dh.jpg', alt: 'corazon' },
   { id: 22, src: process.env.PUBLIC_URL + '/img/productos/modem-motorola.jpg', alt: 'corazon' },
   { id: 23, src: process.env.PUBLIC_URL + '/img/productos/motorola-moto-e7.jpg', alt: 'corazon' },
   { id: 24, src: process.env.PUBLIC_URL + '/img/productos/notebook-lenovo.jpg', alt: 'corazon' },
   { id: 25, src: process.env.PUBLIC_URL + '/img/productos/parlante-jbl.jpg', alt: 'corazon' },
   { id: 26, src: process.env.PUBLIC_URL + '/img/productos/samsung-galaxy-s21-plus-5g.jpg', alt: 'corazon' },
   { id: 27, src: process.env.PUBLIC_URL + '/img/productos/samsung-tu7000.jpg', alt: 'corazon' },
   { id: 28, src: process.env.PUBLIC_URL + '/img/productos/sony-playstation-5.jpg', alt: 'corazon' },
   { id: 29, src: process.env.PUBLIC_URL + '/img/productos/televisor-lg.jpg', alt: 'corazon' },
   { id: 30, src: process.env.PUBLIC_URL + '/img/40-ciento-descuento-promocion_2227-148.avif', alt: 'corazon' },
   { id: 31, src: process.env.PUBLIC_URL + '/img/clientessatisfechos.jpeg', alt: 'corazon' },
   { id: 32, src: process.env.PUBLIC_URL + '/img/ppal.jpg', alt: 'corazon' },
   { id: 33, src: process.env.PUBLIC_URL + '/img/equiponuevo.jpg', alt: 'corazon' },
   { id: 34, src: process.env.PUBLIC_URL + '/img/1-pago_seguroNUEVO.png', alt: 'corazon' },
   { id: 35, src: process.env.PUBLIC_URL + '/img/entrega-a-domicilio.jpg', alt: 'corazon' },
   { id: 36, src: process.env.PUBLIC_URL + '/img/feliz.png', alt: 'corazon' },
   { id: 37, src: process.env.PUBLIC_URL + '/img/soporte-especializado.webp', alt: 'corazon' },
   { id: 38, src: process.env.PUBLIC_URL + '/img/azul.jpg', alt: 'corazon' },
   { id: 39, src: process.env.PUBLIC_URL + '/img/cartel.png', alt: 'corazon' },
   { id: 40, src: process.env.PUBLIC_URL + '/img/ubicacion.png', alt: 'corazon' },

 ];

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}

    </div>
  )
}

export default MostrarImagenes;
