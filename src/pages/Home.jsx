import React from 'react'
import Scroll from '../components/Scroll';
import Header from '../components/header/Header';
import '../App.css'

const Home = () => {
  return (
    <div className="App">
    <main className="App-header">
      
      {/*Para insertar comentarios aqui se debe hacer asi ya que es la forma de insertar javaScript dentro del return */}
      
      {/*Aqui estamos llamando a  el componente Header*/}
      <Header></Header>
      
      {/*Aqui estamos llamando a  el componente Scroll*/}
      {/*Podemos ver que dentro tiene una propiedad(images) a la que se le esta pasando una variable que es = images  se refiere al valor del import que esta más arriba (<-----)  */}
      {/*En este caso no lo usaremos en el componente de scroll pero lo he puesto como ejemplo*/}
      <Scroll ></Scroll>

       {/*Aqui estamos llamando a  otro componente Scroll ya que como los componentes son reutilizables podriamos llamarlos todas las veces que quisieramos*/}
    
    </main>
  </div>
  )
}

export default Home