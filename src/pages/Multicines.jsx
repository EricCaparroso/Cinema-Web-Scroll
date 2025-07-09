import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'

import CarouselBig from '../components/carousel2/CarouselBig'

const Multicines = () => {
  const data = dataJson.datos.peliculas;
  const todayTimestamp = Date.now(); // Fecha actual
 
   
    

  return (
    <div className='App-header'>
    <Header></Header>
    <div id='multicines' className='xsur2'>
            <div className="xsur2-section-1">
                <p className="yelmo-section-1_head">La Laguna</p>
                <h1 className="yelmo-section-1_title">Multicines Tenerife</h1>
                <p className="yelmo-section-1_p">Cada miércoles, las entradas tienen un precio especial de 5,10€</p>
                <p className="yelmo-section-1_p">El cine organiza sesiones especiales como charlas de cine, temporadas de ópera y preestrenos exclusivos.</p>
                <p className="yelmo-section-1_p">Camino La Hornera (Centro Comercial Alcampo), S/N, 38296, San Cristóbal de La Laguna, Tenerife.</p>
                <a className='navigation-link' href='/cinema'>Back</a> 
            </div>
            <img src='https://pbs.twimg.com/profile_images/1381888456712916992/SMojvV09_400x400.jpg'></img>
        </div>
        <CarouselBig></CarouselBig>
        {data.map((element,index)=>{
        
               return( 
                <div className='cartelera-container'>

                <div className='movie-container'  key={index}>
                    <p>{element.titulo}</p>
                    <img src={element.Poster} alt={element.titulo}></img>
                    <ul key={index}>
                      {Object.entries(element.horarios).map(([dia,hora])=>{
                        return(
                          <li key={dia}>{`${dia}: ${hora.join(", ")}`}</li>
                        )
                      })}
                      
                    </ul>
                </div> 
                </div>)
            })}
    </div>
  )
}

export default Multicines