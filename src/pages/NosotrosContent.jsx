import React from 'react'
import './nosotros.scss';


const NosotrosContent = () => {
  return (


          <main className="main-nos">
        <div className="nos-container-title">
            <h1 className="nos-title">NOSOTROS</h1>
        </div>
        <div className="img-ppal"><img src={'/img/ppal.jpg'} alt="Local comercial con empleado y cliente" />
        </div>
        <div className="parrafo1"><p>Somos una empresa que está en el mercado hace 10 años, nos dedicamos a vender toda clase de productos para el hogar, así como tecnologías. Brindamos un servicio de excelencia. Nos importan nuestros clientes por eso siempre estamos renovando nuestros catálogos para conseguirte las mejores ofertas. Te invitamos a conocernos más. </p></div>





        <div className="container">


            <div className="container-card">
                <div className="container-image">
                    <img src={'/img/equiponuevo.jpg'} alt="6 miembros del equipo de trabajo" />
                </div>

                <div className="nos-t-p">
                    <h2>NUESTRO EQUIPO</h2>
                    <p>Somos una empresa Altamente en crecimiento, no solo por los productos de calidad que vendemos,
                        sino por la calidez, eficiencia y atención personalizada de nuestro equipo. El Team de Liqui
                        Shop tiene la formación y experiencia brindar al usuario un servicio de calidad, tanto en
                        nuestros locales como por las vías electrónicas</p>
                </div>
            </div>


            <div className="container-card">

                <div className="nos-t-p">
                    <h2>COMPRA SEGURA</h2>
                    <p>Si compras en Liqui Shop compras seguro, contamos con un respado de seguridad impecable. Tenemos
                        muy buenas referencias.Cuidamos tus datos, tus transferencias, contamos con todos los protocolos
                        y tecnologías para darte seguridad.</p>
                </div>
            
            <div className="container-image">
                <img src={'/img/1-pago_seguroNUEVO.png'} alt="imagen de una tarjeta con un caando y dice 100% seguro" />
            </div>
        </div>




            <div className="container-card">
                <div className="container-image"><img src={'/img/entrega-a-domicilio.jpg'} alt="Empleado llevando los pedidos de caja a los hogares" /></div>

                <div className="nos-t-p">
                    <h2 className="puerta">A TU PUERTA</h2>
                    <p>Nos importa tu tiempo y necesidades.Compra mas fácil y rápido, con un click de compra nos
                        encargamos de que tu producto favorito llegue a tu casa, lo más pronto posible. Puedes consultar
                        por precios especiales para que te lleguen en un máximo de 2 horas.Tenelo ya. </p>
                </div>
            </div>





            <div className="container-card">
                <div className="nos-t-p">
                    <h2>CLIENTES FELICES</h2>
                    <p>Somos una empresa Altamente en crecimiento, no solo por los productos de calidad que vendemos, sino
                        por la calidez, eficiencia y atención personalizada de nuestro equipo. El Team de Liqui Shop tiene
                        la formación y experiencia brindar al usuario un servicio de calidad, tanto en nuestros locales como
                        por las vías electrónicas</p>
                </div>
            
                <div className="container-image"><img src={'/img/feliz.png'}  alt="Una mujer muy feliz con bolsas de compras" /></div>
            </div>




                <div className="container-card">
                    <div className="container-image"><img src={'/img/soporte-especializado.webp'}  alt="Dibujo de un empleado con micrófono y auriculares pronto para dar soporte técnico" /></div>

                    <div className="nos-t-p">
                        <h2>Asesoramiento</h2>
                        <p>Contamos con una Alta demanda de ventas pero cada cliente tiene nuestra atención. Estamos para
                            disipar tus dudas, atender tus necesidades, por los distintos medios de comunicación.Garantías de seguimiento del producto, y un equipo pronto para atendenderte.</p>
                    </div>
                </div>


            
        </div>
        </main>

    
  );
};

export default NosotrosContent;
