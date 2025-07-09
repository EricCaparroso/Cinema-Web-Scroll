/*  
import React from 'react'


import CarouselBig from '../components/carousel2/CarouselBig';
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import yelmoSc from '../assets/cinema/Cine-Yelmo-en-Santa-Cruz-de-Tenerife-8-1024x768.jpg'
import datajson from '../assets/data'
export const YelmoSc = () => {
  const data = datajson;
    const todayTimestamp = Date.now(); // Fecha actual
    const sevenDaysLaterTimestamp = todayTimestamp + (7 * 24 * 60 * 60 * 1000); // Siete días después

    const scCartel= data.d.Cinemas.filter(cine => cine.Key === 'meridiano')
    // Filtrar fechas que estén dentro del rango de los próximos 7 días
    const dates = scCartel.flatMap(cinema => 
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
                <p class="yelmo-section-1_head">Santa Cruz</p>
                <h1 class="yelmo-section-1_title">Yelmo Cines Meridiano</h1>
                <p class="yelmo-section-1_p">El dia del espectador son los miércoles, con entradas a 6,20€ </p>
                <p class="yelmo-section-1_p">Este cine ofrece eventos especiales como preestrenos exclusivos y ciclos de cine temáticos.  </p>
                <p class="yelmo-section-1_p2">Centro Comercial Meridiano - Avda. La Salle, S/N, 38005 Santa Cruz De Tenerife.</p>
                <Link to={'/cinema'} class="yelmo-section-1_button">Back</Link> 
            </div>
            <img src={yelmoSc}></img>
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
};
    
  

*/