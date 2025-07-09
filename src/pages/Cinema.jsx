import React from 'react'
import Header from '../components/header/Header'
import yelmoSc from '../assets/cinema/Cine-Yelmo-en-Santa-Cruz-de-Tenerife-8-1024x768.jpg'
import zcentral from '../assets/cinema/Fachada-cines-ZentralCenter.jpg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Carousel from '../components/carousel/Carousel'
import CarouselBig from '../components/carousel2/CarouselBig'


function Cinema() {
  return (
  <>
    <div className='App-header'>
        <Header></Header>
        <div  className='cinema-section-1'>
            <nav className='nav-1' >
                <ul >
                    <li>
                        <a class="navigation-link"  href='#multicines'>La Laguna</a>
                    </li>
                    <li>
                        <a className='navigation-link' href='#meridiano'>Santa Cruz</a>
                    </li>
                    <li>
                        <a className='navigation-link' href='#xsur'>Costa Adeje</a>
                    </li>
                    <li>
                        <a className='navigation-link' href='#lavilla'>La Orotava</a>
                    </li>
                    <li>
                        <a className='navigation-link' href='#zentral'>Arona</a>
                    </li>
                </ul>
            </nav>
                <div className='column'>
                    <p className="yelmo-section-1_head">Tenerife</p>
                    <h1 className="cinema-banner-title">Vive el Cine como Nunca</h1>
                    <p className="yelmo-section-1_p">Disfruta de los Días del Espectador, sesiones matinales y eventos especiales con precios exclusivos.</p>
                    <p >Encuentra salas en Santa Cruz, La Laguna, La Orotava, Adeje y Playa de las Américas.</p>
                    <p className="yelmo-section-1_p">Descubre la emoción del séptimo arte en los mejores cines de la isla.</p>
                    <p className="yelmo-section-1_p">Elige tu cine favorito y sumérgete en la magia de la gran pantalla.</p>
                </div>
        </div>
        <CarouselBig></CarouselBig>
  
        <div id='multicines' className='container-cinema-banner'>
            <div className="cinema-banner">
                    <p>La Laguna</p>
                    <h1 className='cinema-banner-title'>Multicines Tenerife</h1>
                <div className='cinema-banner-content'>
                    <p>Cada miércoles, las entradas tienen un precio especial de 5,10€</p>
                    <p>El cine organiza sesiones especiales como charlas de cine, temporadas de ópera y preestrenos exclusivos.</p>
                    <p>Camino La Hornera (Centro Comercial Alcampo), S/N, 38296, San Cristóbal de La Laguna, Tenerife.</p>
                </div>
                <a className='navigation-link' href='/multicines'>Cartelera</a> 
            </div>
            <img src='https://pbs.twimg.com/profile_images/1381888456712916992/SMojvV09_400x400.jpg'></img>
        </div>


        <div className='div-intermedio'></div>
        <div id='multicines' className='container-cinema-banner'>
            <div className="cinema-banner">
                    <p>Santa Cruz</p>
                    <h1 className='cinema-banner-title'>Yelmo Cines Meridiano</h1>
                <div className='cinema-banner-content'>
                    <p >El dia del espectador son los miércoles, con entradas a 6,20€ </p>
                    <p >Este cine ofrece eventos especiales como preestrenos exclusivos y ciclos de cine temáticos.  </p>
                    <p >Centro Comercial Meridiano - Avda. La Salle, S/N, 38005 Santa Cruz De Tenerife.</p>
             </div>
                <a className='navigation-link' href='/multicines'>Cartelera</a> 
            </div>
            <img src={yelmoSc}></img>
         </div>


        <div className='div-intermedio'></div>

        <div id='multicines' className='container-cinema-banner'>
            <div className="cinema-banner">
                    <p>Adeje</p>
                    <h1 className='cinema-banner-title'>X-SUR Cine</h1>
                <div className='cinema-banner-content'>
                     <p >El día del espectador es el miércoles, con entradas a 5,50€, aunque los estrenos están excluidos</p>
                    <p >Ofrece sesiones matinales sabados domingos y festivos a 5,50€ y los martes descuento del 50% para mayores de 60</p>
                    <p >Calle Lisboa 2, 38660 Adeje ubicado en el Centro Comercial X-Sur.</p>
                 </div>
                <a className='navigation-link' href='/multicines'>Cartelera</a> 
            </div>
            <img src='https://cdn.diariodeavisos.com/wp-content/uploads/2021/10/Cines-1024x599.jpg'></img>

        </div>


        <div className='div-intermedio'></div>

        <div id='multicines' className='container-cinema-banner'>
            <div className="cinema-banner">
                    <p>La Orotava</p>
                    <h1 className='cinema-banner-title'>Yelmo Cines La Villa</h1>
                <div className='cinema-banner-content'>
                    <p >El dia del espectador son los miércoles, con entradas a 6,20€</p>
                    <p >Cuenta con salas junior, diseñadas especialmente para niños y con áreas de juegos  </p>
                    <p >Autopista del Norte S/N, 38300 La Orotava (Santa Cruz de Tenerife).</p>
               </div>
                <a className='navigation-link' href='/multicines'>Cartelera</a> 
            </div>
            <img src='https://res.cloudinary.com/deunyl3k1/image/upload/s--nP4Ae_m_--/c_fill,f_auto,h_650,q_auto,w_800/v1/lv2/mall_common/0001/57/d5f76d7821a486da3980102116dd5f7d7c54467b.jpg'></img>
        </div>


        <div className='div-intermedio'></div>
        <div id='multicines' className='container-cinema-banner'>
            <div className="cinema-banner">
                    <p>Las Americas</p>
                    <h1 className='cinema-banner-title'>Multicines Zentral Center</h1>
                <div className='cinema-banner-content'>
                    <p >El día del espectador se celebra miércoles y jueves con entradas a 5€, aunque los festivos están excluidos</p>
                    <p >Ofrece sesiones matinales domingos 12:00 a 5€ </p>
                    <p >Avda. Antonio Dominguez. Nº5- Playa de las Américas- Arona TENERIFE- Islas Canarias</p>
              </div>
                <a className='navigation-link' href='/multicines'>Cartelera</a> 
            </div>
                <img src={zcentral}></img>   
            </div>


       

        

    

   
        
    <Footer></Footer>
    </div>
    </>
  )
}

export default Cinema