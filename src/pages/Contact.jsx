import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/header/Header'

const Contact = () => {
  return (
    <>
    <div className='App-header-contact'>
        <Header></Header>
        
        <div className='contact-us'>
          <div className='contact-container'>
            <p className='contact-title'>CONTACT US</p>
    <p> Ubicación: Santa Cruz, Canarias, España</p>
    <p> Horario: Lunes a Viernes, 9:00 - 18:00</p>
    <p> Correo: contacto@cineisla.com</p>
            <p> Teléfono: +34 123 456 789</p>
          </div>        
      </div>
      <div className='form-section'>
        <form class="form">
          <p class="form-title">Envianos tus sugerencias</p>
            <div class="input-container">
              <input type="email" placeholder="Enter email"></input>
              <span>
              </span>
          </div>
          <div class="input-container">
              <input type="password" placeholder="Consejos"></input>
            </div>
            <button type="submit" class="submit">
            Send
          </button>

          <p class="signup-link">
            No account?
            
          </p>
        </form>
      </div> 

   
    </div>
       <Footer></Footer> 
    </>
  )
}

export default Contact