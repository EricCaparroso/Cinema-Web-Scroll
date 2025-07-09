import React, { useEffect, useState } from 'react'
import Carousel from '../carousel/Carousel'


const TextBox = (props) => {


  
  const [activeIndex,setActiveIndex] = useState(0)
  const [scrollPercentage, setScrollPercentage] = useState(props.scrollFraction)
  const [range, setRange] = useState(0)
  const [numArticles, setNumArticles] = useState(0) 
    
  useEffect(() => {
    const handleScroll = () => {
      //Se convierte a porcentaje el scrollFaction que nos pasa Scroll
      setScrollPercentage(Math.floor((props.scrollFraction) * 100))
      //console.log(scrollPercentage,"scrollPercentaje")
      
      //Se utiliza querySelectorAll para encontrar todas las etiquetas que se especifican,
      //en este caso todas las etiquetas article 
      setNumArticles(document.querySelectorAll("article").length )
      //console.log(articles,"articles")

      //console.log(document.querySelectorAll("article"), "<------ numero de articulos")      

      //Aqui hacemos que el rango sea 100 entre el numero de etiquetas article
      //De esta forma se establece un rango para cada article
      setRange(100/numArticles)
      console.log(range,"rango")



      //Seteamos el activeIndex con el porcentaje de scroll partido por el rango
      //Este al dividir el scrollPercentage entre el rango asignamos el porcentaje de scroll a un rango concreto
      setActiveIndex(Math.floor(scrollPercentage / range))
    }

    window.addEventListener("scroll", handleScroll)
   
    /*
    MI PRUEBA
    const articlesNodeList = document.querySelectorAll("article")
    const articles = Array.from(articlesNodeList)
    setNumArticles(articles.length/2)
    
    //console.log(numArticles,"Nº de articles")
    //console.log(props.maxScroll,"MaxScroll")
    console.log(props.scrollPosition,"Scroll position")
  
    const scrollValues= Array.from(articles).map((element,index)=>
      Math.floor(props.maxScroll/numArticles) * (index +1)) 
    setscrollPortions(scrollValues)
    
    //console.log(scrollPortions,"Scroll Portions")
    //console.log(Math.floor(props.maxScroll/numArticles))
      
    scrollPortions.forEach((x,index) => {
        if (props.scrollPosition<=scrollPortions[0]) {
            setActive(!active)  

        }else if (props.scrollPortions>=scrollPortions[1]) {
            setActive(!active)
        }else if(props.scrollPortions>=scrollPortions[2]) {
            
        }else {
          
        }
    });
    */    
        
    return () => window.removeEventListener("scroll", handleScroll);
    }, [props])
    //Aqui tenemos el array de articulos se pueden ir añadiendo más
    //En caso de que se quisiera añadir más cosas a los articulos como por ejemplo imagenes o otra cosa se podria crear un array de objetos
  
    const articlesData = [
      {
        title: "Bienvenido a Cines Tenerife",
        month: "June",
        date: '29',
        url:'https://img.freepik.com/foto-gratis/auditorio-cine-vacio-sillas_651396-2891.jpg?semt=ais_hybrid&w=740'
    },
      {
         title: "Jurasic World Rebirth",
      month: "Jully",
      date: '2',
      url:'https://www.mubis.es/media/articles/34491/337547/primer-trailer-de-jurassic-world-el-renacer-original.jpg'
    },
      { title: "lilo y Stich",
      month: "Jully",
      date: '2',

   },
      {title: "Como entrenar a tu Daragon",
      month: "June",
      date: '12',
      url:'https://img.asmedia.epimg.net/resizer/v2/NL2EI7D2LRDJBJSFZ4BAIFKDIM.jpg?auth=79cbb8ca9635cdca643490259325ac61673bdda6c6041bef67efa9bff4a20678&width=360&height=203&smart=true'}
    ]

    
  return (
    <>
   
    {/*Como vamos a hacer un map del array de articulos pondremos todas las etiquetas entre {} para poder utilizar javaScript  */}
    {/*
     <div className='container'>
      
          <div className='container-title'>
          <h1>{title}</h1>
          <img src={images[0]}></img>
          </div>
          
          <p>Lorem ipsum dolor sit amet...</p>  
        </div> 
        <button>Click</button>
    
    El map recorre el array y hace un retur de las etiquetas con title(Los textos del array) e index(El indice de cada texto) */}
    {articlesData.map((article, index)=>(
      
      //en el article  pondremos:
      //       key: identifica a los elementos de la lista, en este caso como es una lista estatica se utiliza index, sin embargo si fuera una lista que se modificase se deberia utilizar un id unico  
      // Dentro del className comparamos si active index(El indice que pertenece a donde se encutra el scroll) es igual al indice se pone el classname "article_active", si no coincide se pone "article"
      <article key={index} className={activeIndex === index ? "article_active" : "article"}>
         
         
       
        <div class="parent">
          <div class="card">
           
            <div class="content-box">
              <span class="card-title">{article.title}</span>
              <p class="card-content">
                Desliza para ver los próximos estrenos 
                Presiona See More para encontrar tu cine
              </p>
             
              <span class="see-more"><a href="/cinema" ><span>SEE MORE</span></a></span>
            </div>
           
           
            <div class="date-box">
              <span class="month">{article.month}</span>
              <span class="date">{article.date}</span>
            </div>
            <div class="date-box2">
              <img src={article.url}></img>
            </div>
          </div>
  
  
        </div>
      </article>
    ))}
    </>
  )
}

export default TextBox