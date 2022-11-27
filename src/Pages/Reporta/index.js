import { Interface } from "../../ComponentesConstantes/Interface";
import "./style.css";
import Reporta1 from "./Imagens/reporta1.png";
import Reporta2 from "./Imagens/Reporta2_2.png";
import Dog1 from "./Imagens/DogRe1.png";
import Dog2 from "./Imagens/DogRe2.png";
import { Rodape } from "../../ComponentesConstantes/Rodape";
import { Link } from 'react-router-dom';




export function Reporta () {
   
   return (
 <>
    <Interface />
  <div id="Reporta">
    <h1 id = "h2Reporta">Rep<strong  className ="scd" >orta</strong></h1>

    <div className="titleTopiics">
       <h2>Animais <strong className="scd">desaparecidos</strong></h2>
       <h2>Maus <stong className="scd">tratos</stong></h2>
    </div>

    <div className="titleImg">
      <img src={Reporta1}/>
      <img src={Reporta2}/>
    </div>

    <div data-anime="left" className="divMain">
       <div>
          <h3 >Maus <strong className="scd">tratos</strong></h3>
           <p>
           Lorem ipsum dolor sit amet, consectetur  
           dadipiscing elit. Etiam interdum mauris in nisl 
           tempus euismod interdum mauris in nisl interdum mauris 
           in nisl 
           </p>
           <Link to="/MausTratos"><button>Denunciar</button></Link> 
       </div>

       <div id="BodyReporta">
          <img src={Dog1}/>
       </div>
    </div>

    <div data-anime="left" className="divMain">
      <div id="BodyReporta2">
         <img src={Dog2}/>
      </div>

      <div>
          <h3>Animais <strong className="scd">desaparecidos</strong></h3>
           <p>
           Lorem ipsum dolor sit amet, consectetur  
           dadipiscing elit. Etiam interdum mauris in nisl 
           tempus euismod interdum mauris in nisl interdum mauris 
           in nisl 
           </p>
             <button>Denunciar</button>
       </div>
    </div>
</div>    
    <Rodape />
 </>
   )
}

/* Função para animação de rolagem da página */

const debounce = function(func, wait, immediate) {
   let timeout;
   return function(...args) {
     const context = this;
     const later = function () {
       timeout = null;
       if (!immediate) func.apply(context, args);
     };
     const callNow = immediate && !timeout;
     clearTimeout(timeout);
     timeout = setTimeout(later, wait);
     if (callNow) func.apply(context, args);
   };
 };
 
 function animationScroll() {
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = "animate";
 //630
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
   if(windowTop > element.offsetTop) {
     element.classList.add(animationClass);
   }
   else {
     element.classList.remove(animationClass);
   }
  })
 }
 
 animationScroll();
 
  // evento do scroll 
 window.addEventListener('scroll', debounce(function() {
   animationScroll();
   console.log("okay!!");
 }, 14));