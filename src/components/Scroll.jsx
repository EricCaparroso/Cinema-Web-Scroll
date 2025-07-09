import React, { useState } from 'react'
import images from '../images' //<---Importacion de images

import { useEffect, useLayoutEffect } from 'react'
import TextBox from './textbox/TextBox'
import BackgroundRender from './background/BackgroundRender'

//Si quisieramos utilizar la propiedad de images del componente App.jsx
//tenemos que poner props entre los parentesis del componente
const Scroll = (props) => {
//La finalizad que busca el componente scroll es manejar el deslizamiento de la pagina




  //Aqui definiremos todas las variables que vamos a utilizar como useState 
  
  //---------------------------------------------------------------------------------------------
  //                                         Detro del(              ) parenetesis le asignamos su valor inicial
  //                  El setScrollPosition: se utiliza para actualizar sus valores sino react falla 
  //                                                   window.scrollY: indica la posicion del scroll de la pagina, sin hacer scroll es 0 
  const [scrollPosition, setScrollPosition ]= useState(window.scrollY)
  //---------------------------------------------------------------------------------------------

  //Aqui definimos una variable para saber cuanto es el numero maximo de scroll en la pagina
  //                                         document: representa el documento Html, es decir toda la estructura de la pagina web
  //                                                  documentElement: apunta al elemento raiz del Html <html>
  //                                                                  scrollHeight: es una propiedad de documentElement devuelve la altura total, importante incluyen el area fuera de la vista  
  //                                                                                 window.innerHeight: devuelve la altura visible, la parte que el usuario ve sin desplazarse
  //                                                                          la resta: nos dice cuanto contenido hay mas alla 
  /** - Ejemplo:
* Imagina que tienes una página web con un contenido largo. Supongamos que:
* document.documentElement.scrollHeight es 3000 píxeles (esto es la altura total del contenido, incluyendo la parte que no está visible).
* window.innerHeight es 1000 píxeles (esto es la altura de la ventana, es decir, lo que el usuario puede ver sin hacer scroll).
* 3000 - 1000 = 2000 ese resultado indica la cantidad que el usuario necesita desplazarse para ver toda la página.*/
  const [maxScroll,setMaxScroll] = useState(document.documentElement.scrollHeight - window.innerHeight)
//-----------------------------------------------------------------------------------------------

//Aqui definimos scrollFraction que es la division entre la posicion y el max scroll que habiamos obtenido anteriormente
//la utilizaremos para poder calcular que frame(imagen) es la que toca colocar  
  const [scrollFraction , setScrollFraction] = useState(scrollPosition/maxScroll)
//-----------------------------------------------------------------------------------------------

//Es la variable que indica que frame toca será el numero de indice del frame es decir en el array de imagenes images[frame] frame sera la posicion
  const [frame ,setFrame] = useState(0)
//-----------------------------------------------------------------------------------------------

//Aqui definimos una llamada src que sera la ruta a la imagen
//                               require() es una funcion de Node.js para importar archivos o modulos
//                 Se usan estas comillas`` para inyectar variables en la ruta                                       
//                                        ../assets/frames/ esta es la primera parte de la ruta que pertenece a la a la carpeta donde esta el archivo images.js
//                                                         ${} aqui inyectamos la variable con est simbolo que seria el array de imagenes images[] que importamos arriba, en este caso es la posicion 0 porque es la primera posicion del array
  const [src, setSrc] = useState(require(`../assets/frames/${images[0]}`))  //<--Comentar porque se extrajo esta logica al componente background
//-----------------------------------------------------------------------------------------------

//Definimos una variable constante MAX_FRAMES (en mayuscula porque es constante y no va a cambiar, en js las que cambian se declaran con let pero como estamos en react y utilizamos useState siempre utilizaremos const) 
  const MAX_FRAMES = 128
  
 
 
  
useLayoutEffect(() => {
  const handleMaxScrol = ()=>{

    console.log(images[0])

    // Asegura que maxScroll se actualiza después de que el DOM esté listo
    setTimeout(() => {
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
      
      /*
      const element = document.querySelector("main")
      setIaMaxScroll(element.scrollHeight - element.clientHeight)
      */
     
    }, 100);

  }
  handleMaxScrol()
  window.addEventListener('resize', handleMaxScrol)
  }, []); 
//El use effect se ejecuta cada vez que cambia el valor de las variables que tiene en el corchete inferior en este caso scrollPositiot
//por ejemplo cada vez que cambia se lanza otra vez el useEffect y se ejecuta todo lo que contiene
// En caso de que el corchete [] estuviera vacio solo se lanzaria la primera vez
useEffect(() => {
  
  //Esta linea define una funcion que manejara la actualizacion de los valores de las variables cada vez que se lance el useEffect
  const handleScroll = ()=>{

    //Aqui con el seter actualizamos la Posicion del Scroll ¡¡¡REVISAR PORQUE AVECES APARECE UNDEFINED!!!
    setScrollPosition(window.scrollY)
    //console.log(window.scrollY,"Scroll") //haciendo el console log podemos mirar en el modo inspeccionar del navegador si aparece el valor correctamente o no y en funcion de esto corregir que esta pasando

    //Para ver si el Scroll Maximo es un valor correcto 
    //console.log(document.documentElement.scrollHeight - window.innerHeight, "Max Scroll")

    //Aqui con el seter actualizamos el valor de ScrollFraction
    setScrollFraction(scrollPosition/maxScroll)
    //console.log(scrollPosition,maxScroll,scrollPosition/maxScroll) 
    
    //Aqui con el seter actualizamos el indice del Frame
    setFrame(Math.floor(scrollFraction * MAX_FRAMES))
    //console.log(Math.floor(scrollFraction * MAX_FRAMES))
    

  }

  //Aqui creamos un event listener, es una funcion que escucha eventos en un elemento.
  //En este caso se le dice a window (la ventana del navegador) que detecte cuando se hace 'scroll' y ejecute la funcion handleScroll que declaramos antes.
  //Otros eventos son: 'click', 'keydown', 'focus', 'change'
  //En react tambien los podemos manejar como propiedades dentro de las etiquetas
  //Por ejemplo: <Button onClick={funcionParaunClick}> </Button
    window.addEventListener('scroll', handleScroll)
  
  //El return se suele utilizar para eliminar algo que no necesitemos o desactivar algo que hayamos activado  
  return () => {
  }
  //Como se menciona anteriormente el useState se recarga cada vez que cambie alguno de estos valores
}, [scrollPosition,maxScroll])

  return (
    <>

    {/* <></> Esto es un fragment se puede utlizar esto o un div es necesario para contener todo lo que este dentro del return */}

     {/* <section> es una etiqueta de semantic html se utilizan para que los motores de busqueda posicionen mejor la pagina a la hora tenerla en internet */}
     {/* <section> en este caso se utiliza cuando el contenido que va a ocontener esta todo relacionado con un mismo tema */}
     {/* En la carpeta semanticHtml-guide hay una guia de todas las que existen y cuando utilizarlas */}
     {/*la propiedad style permite introducir estilos directamente en la etiqueta <section> aunque es mas recomendable hacerlo en el App.css */}
    <section style={{ height: '100vh'}}>

     {/* Aqui declaramos un componente Backgrounrender(Backgroun para las imagenes del componente scrol)  */}
     {/* Su finalidad sera recibir el indice de el array de imagenes o frame que toca y renederizar las diferentes imagenes que correspondan  */}
    <BackgroundRender frame={frame}></BackgroundRender>
     
     {/* Aqui declaramos un componente Textbox sera la informacion que se renderiza en el componente scroll */}
     {/* La idea es que sea dinamico y que pueda tener diferentes articulos que vayan cambiando cuando se va scrolleando */}
     {/* le pasamos el scrollPosition para saber cuando deben ir cambiando los articulos uno por el otro */}
     {/* Tambien le pasamos el maxScroll porque lo necesitaremos para hacer el calculo  */}
  
    <TextBox scrollPosition={scrollPosition} maxScroll={maxScroll} scrollFraction={scrollFraction}></TextBox>
    </section>    
    </>
  )
}
//Aqui vemos como se exporta el componente para poder utilizarlo en otros lugares
export default Scroll