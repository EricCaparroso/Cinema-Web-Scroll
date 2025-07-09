import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import banner from '../../assets/cinema/Ballerina.jpg'
import banner2 from '../../assets/cinema/JW4.jpg'
import banner3 from '../../assets/cinema/Lilo.jpg'

const CarouselBig = () => {
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

  return (
    <>
    <div id="carouselExample" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="2000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={banner} class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={banner2} class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={banner3} class="d-block w-100" alt="..."></img>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </>
    
  )
}

export default CarouselBig