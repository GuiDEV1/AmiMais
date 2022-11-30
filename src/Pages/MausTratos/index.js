import { Interface } from "../../ComponentesConstantes/Interface";
import "./style.css";
import mausTratos1 from "./Imagens/Reporta2_2.png";
import mausTratos2 from "./Imagens/MausTratos2.png";
import { Rodape } from "../../ComponentesConstantes/Rodape";
import Girl from "./Imagens/HappyGirl.png";
import back from "./icons/back.png";

export function MausTratos () {
   
   return (
 <>
    <Interface />
   <div id="MausTratos">
   
    <div id="headerM">
      <img src={back} /> 
      <h1>Maus <strong className="scd">Tratos</strong></h1>
     </div>  
      <div id="headerimg">
      <img src={mausTratos2} alt="headerimg" />
      <img src={mausTratos1} alt="headerimg" />
      </div>
      <h2>Denu<strong className="scd">ncie</strong></h2>

       <div data-anime="left" id="footerPai">

          <div id="Conteudo1">
            <img src={Girl} alt="Uma moça sorridente"/>

          <p>
            Denuncie ao orgão responsavel por maus trato de animais , 
            sua atitude salva vidas , ao aperta o botão logo abaixo 
            será redrecionado para o orgão responsavel .
          </p>
          </div>

          <div id="Conteudo2">
              <div>
                  <p>
                  A <strong className="caution">Lei Federal 9.605
                  Art. 32.</strong> Praticar ato de abuso, maus-tratos, 
                  ferir ou mutilar animais silvestres, 
                  domésticos ou domesticados, nativos ou exóticos.
                   <br/><br/><br/>

                   Pena – detenção, de três meses a um ano, e multa.
                </p>   
              </div>
              <button>Denunciar</button>
          </div>
       </div>
  </div> 
  <Rodape/>
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


