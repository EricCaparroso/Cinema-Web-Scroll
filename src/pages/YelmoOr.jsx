
/*
import React from 'react'

import CarouselBig from '../components/carousel2/CarouselBig';
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import data from '../assets/'
const YelmoOr = () => {
    const data = datajson;
    const todayTimestamp = Date.now(); // Fecha actual
    const sevenDaysLaterTimestamp = todayTimestamp + (7 * 24 * 60 * 60 * 1000); // Siete días después

    const orCartel= data.d.Cinemas.filter(cine => cine.Key === 'la-villa-de-orotava')
   
    // Filtrar fechas que estén dentro del rango de los próximos 7 días
    const dates = orCartel.flatMap(cinema => 
        cinema.Dates.filter(date => {
            const movieTimestamp = parseInt(date.Movies[0]?.Formats[0]?.Showtimes[0]?.TimeFilter.match(/\d+/)[0]); 
            return movieTimestamp >= todayTimestamp && movieTimestamp <= sevenDaysLaterTimestamp; 
        })
    );
    
  
    return (
      <div className='App-header'>
      <Header></Header>
      <div className='yelmo'>
          <div class="yelmo-section-1">
              <p class="yelmo-section-1_head">La Orotava</p>
              <h1 class="yelmo-section-1_title">Yelmo Cines La Villa</h1>
              <p class="yelmo-section-1_p">El dia del espectador son los miércoles, con entradas a 6,20€</p>
              <p class="yelmo-section-1_p">Cuenta con salas junior, diseñadas especialmente para niños y con áreas de juegos  </p>
              <p class="yelmo-section-1_p2">Autopista del Norte S/N, 38300 La Orotava (Santa Cruz de Tenerife).</p>
              <Link to={'/cinema'} class="yelmo-section-1_button">Back</Link> 
           </div>
          <img src='https://res.cloudinary.com/deunyl3k1/image/upload/s--nP4Ae_m_--/c_fill,f_auto,h_650,q_auto,w_800/v1/lv2/mall_common/0001/57/d5f76d7821a486da3980102116dd5f7d7c54467b.jpg'></img>
      </div>


      <CarouselBig></CarouselBig>
        {dates.map((date, index) => (
          
          <div className='cartelera-container' key={index}>
            <h2>Fecha: {new Date(parseInt(date.Movies[0]?.Formats[0]?.Showtimes[0]?.TimeFilter.match(/\d+/)[0])).toLocaleDateString()}</h2>
            {date.Movies.map(movie => (
              <div className='movie-container' key={movie.Id}>
                <h3>{movie.Title}</h3>
                <img src={movie.Poster} alt={movie.Title} style={{ width: "200px" }} />
                <ul>
                  {movie.Formats.flatMap(format => 
                    format.Showtimes.map(showtime => (
                      <li key={showtime.ShowtimeId}>
                        Hora: {showtime.Time} - Sala: {showtime.Screen}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
}

export default YelmoOr
 */ 