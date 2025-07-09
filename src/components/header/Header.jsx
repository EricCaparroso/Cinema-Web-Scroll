import React from 'react'
import cine from "../../assets/cinema/cine.jpg";
import { Link } from 'react-router-dom';
import Carousel from '../carousel/Carousel';

const Header = () => {
  return ( 
    <header>
    <div className='header-container'>
      <div className='header-container-text'>
      <div className='header-title'> 
      <a className='logo' href='/'>
      <img src={cine} alt='logo'></img>
      <h1>Cines Tenerife</h1>
      </a>
    <i class="fa-solid fa-bars"></i>
    </div>  
    <nav>
        <ul>
            <Link  to={'/'}>Inicio</Link>
            <Link to={'/cinema'}>Cines</Link>
            <Link to={'/contact'}>Contacto</Link>
            <Link to={'/about'}>Blog</Link>
        </ul>
    </nav>
      </div>

    
      <Carousel></Carousel>
      </div>
    </header>
  )
}

export default Header