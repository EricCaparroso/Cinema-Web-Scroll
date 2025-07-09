import React from 'react'
import images from '../../images' //<---Importacion de images
import { useEffect,useState} from 'react'

//Como se menciona en Scroll.jsx este componente tiene el fin de colocar las imagenes 
//Si pasamos las imagenes como prop podemos cambiarlas desde el componente scroll importando otras sintocar este componente, en este caso no lo he hecho todavia
//en este caso solo hemos pasado como propiedad desde el componente Scroll el frame props.frame 
//Tambien podriamos declararlo como un useState ej: cosnt [frame,setFrame] = useState(props.frame
const BackgroundRender = (props) => {
//Aqui definimos una variable llamada src que sera la ruta a la imagen
//                               require() es una funcion de Node.js para importar archivos o modulos
//                   Se usan estas comillas`` para inyectar variables en la ruta                                       
//                                          ../assets/frames/ esta es la primera parte de la ruta que pertenece a la a la carpeta donde esta el archivo images.js
//                                                              ${} aqui inyectamos la variable con est simbolo que seria el array de imagenes images[] que importamos arriba, en este caso es la posicion 0 porque es la primera posicion del array
    const [src, setSrc] = useState(require(`../../assets/frames/${images[0]}`))
    
    useEffect(() => {
//En este if primero vemos si ha llegado el frame
    if (props.frame) {
        //console.log(props.frame,"Frame Index") //Hacemos un console.log para verlo por consola por sino llega saber que esta llegando

        //En caso de que ha llegado el frame pasamos a ver si se han importado las imagenes correctamente
        // images: la variable que hemos nombrado en el import que sera el array de imagenes
                //props.frame es el indice que recibimos desde el componente Scroll  
        if(images[props.frame]){
        //Si tenemos el array de imagenes con el indice pasamos a utilizar el setSrc para que la imagen se renderice en la etiqueta <img>   
        //A diferencia de como vimos antes aqui el indice sera frame 
            setSrc(require(`../../assets/frames/${images[props.frame]}`))
        }else{
        //Si no hay indice o es undefined o etc se pondra el 0 por defecto que sera la primera posicion del array      
            setSrc(require(`../../assets/frames/${images[0]}`))
    }
    }else{
        //En caso de que no haya nada lanzaremos un mensaje en la consola para saber que las imagenes no estan llegando o se han importado mal
        console.log('No han llegado las imagenes')
    }
      return () => {
        
      }
      //El useEffect se lanza cada vez que el props.frame que se recive cambia, que será cada vez que se hace scroll
    }, [props.frame])
    

  return (
    <>
        {/*Aqui utilizamos un <figure> en vez del fragment <> porque se va a contener una imagen */}

        {/* En la propiedad src de la imagen pondriamos nuestra variable src, el alt es un texto que aparecera en caso de que no se carguen correctamente las imagenes*/}
        {/* Hay que cambiar la etiqueta img pro  */}
        <img  src={src}  alt='frame'></img>
    </>
  )
}

export default BackgroundRender