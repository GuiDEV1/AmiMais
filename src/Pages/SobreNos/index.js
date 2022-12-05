import "./style.css";
import Bag from "./Icons/bag.png";
import Dog1 from "./Imagens/Dog1.png";
import Objective from "./Icons/objective.png";
import Cat1 from "./Imagens/cat1.png";
import CatDog from "./Imagens/catAndDog.png";
import Engajament from "./Icons/alcance.png";
import { Interface } from "../../ComponentesConstantes/Interface";
import { Rodape } from "../../ComponentesConstantes/Rodape";

export function Sobrenos () {
   
   return (
 <>
    <Interface />
   <div id="SobreNos">
    <h1 id="h1Sobrenos">Sobre <strong className="scd">nós</strong></h1>
   
      <div className="titleIcon ">
         <h2> <img src={Bag} />Quem <strong className="scd">somos</strong></h2>
      </div>

      <div id="quemsomos" className="conteudo">
         <p>
         Somos a AmiMais uma plataforma web fundada por estudantes  do instituto 
         Proa em 2022 que teve como inspiração o resgate e proteção de animais,  
         temos como os nossos valores amor a todos os animais, bem como a vontade 
         de ajudar o máximo de animais possivel.
         </p>
         <img id="conteudoimg1" src={Dog1}/>
      </div>

      <div data-anime="left" className="titleIcon2">
         <h2><img src={Objective}/> Obje<strong className="scd">tivos</strong></h2>

      </div>

      <div data-anime="left" className="conteudo1">
         <img src={Cat1}/>

         <p>
         Nosso objetivo é dar visibilidade para os resgatadores e Ongs, fornecendo ajuda para os 
         animais que eles possuem. Também queremos auxiliar na diminuição do abandono por meio da 
         conscientização das pessoas, reforçando a importância da castração, o único meio para diminuir 
         a quantidade de animais na rua, abrigos e consequentemente, abandonos.
         </p>
      </div>

      <div data-anime="right" className="titleIcon ">
         <h2> <img src={Engajament} />Alc<strong className="scd">ance</strong></h2>
      </div>

      <div data-anime="right" className="conteudo">
         <p>
         Buscamos alcançar o máximo de resgatadores possível a 
         abraçar nossa causa, queremos ajudar não só cães e gatos, mas 
         qualquer animal que esteja precisando de ajuda. Futuramente iremos 
         implantar mutirões de cuidados para resgate de pets.
         </p>
         <img id="img2" src={CatDog}/>
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
 }, 20));