import './style.css';
import Resgatar from "./Icons/resgatar.png";
import Buscar from "./Icons/BuscarAdocoes.png";
import Resgatador from "./Icons/Resgatador.png";
import Resgatadores from "./Imagens/resgatadores.png";
import PeopleHappy from "./Imagens/happyPeople.png";
import Empresas from "./Imagens/Empresas.png";
import Bag from "./Icons/bag.png";
import Objective from "./Icons/objective.png";
import Engajament from "./Icons/engajement.png";
import Draw1 from "./Imagens/draw1.png";
import Draw2 from "./Imagens/draw2.png";
import { Interface } from '../../ComponentesConstantes/Interface';
import { Rodape } from '../../ComponentesConstantes/Rodape';
//import traco from "./Icons/tracoMenu.png";



export function Home () {

  // const interegerMenu  = () => {
  //   return "okay";
  // };

  // console.log(interegerMenu());

   return (
 <>
    <Interface />
   <div id="dataAnime Home" >
     <div  className="carroselHome">
      <div className='menuHome'>
        <div className='iconsMenu'>
          <img src={Resgatar} alt="Icone de resgate"/>
          <img src={Buscar} alt="Icone de buscar adoções"/>
          <img src={Resgatador} alt="Icone de solicitar resgatador"/>
         </div>

          <div className='tiltleMenu'>
              <h3>Resgate <br /> um animal</h3>
              <h3>Buscar por <br /> adoções</h3>
              <h3>Solicitar um <br /> resgatador</h3>  
          </div>  
              <hr />
              <h1 id='titleICons'>Faça a diferença</h1>
              <span>Salvando a vida de um animalzinho</span> <br />
              
              <button id='buttonMenuHome'>Cadastre-se</button>
       </div>   
     </div>

       <h2 ><strong className="scd">Para</strong> quem?</h2>

       <div className="imgBody">
         <img src={Resgatadores} />
         <img src={PeopleHappy} />
         <img src={Empresas} /> 
       </div>
    
      <div  data-anime="left" className="titleParaquem">
        <h3>Resgat<strong className="scd">adores(a)</strong></h3>
        <h3>Pessoas c<strong className="scd">omo você</strong></h3>
        <h3>Instituições<strong className="scd">/ongs</strong></h3>
      </div>

     <div  data-anime="left" className="titleParaquem">
       <p>
         Lorem ipsum dolor sit amet, consectetur  dadipiscing elit. 
         Etiam interdum mauris in nisl tempus euismod. Vivamus ut congue 
         sem, n luctus turpis. Ut ac suscipit justo, a pretium nulla. Quisque 
         maximus nisl sit amet mauris scelerisque feugiat.
        </p>

        <p>
         Lorem ipsum dolor sit amet, consectetur  dadipiscing elit. 
         Etiam interdum mauris in nisl tempus euismod. Vivamus ut congue 
         sem, n luctus turpis. Ut ac suscipit justo, a pretium nulla. Quisque 
         maximus nisl sit amet mauris scelerisque feugiat.
        </p>

        <p>
         Lorem ipsum dolor sit amet, consectetur  dadipiscing elit. 
         Etiam interdum mauris in nisl tempus euismod. Vivamus ut congue 
         sem, n luctus turpis. Ut ac suscipit justo, a pretium nulla. Quisque 
         maximus nisl sit amet mauris scelerisque feugiat.
        </p>
     </div>

  <div  data-anime="left" id="catBody">

   </div>

   <div  data-anime="right" className="information">

    <div>
      <h2><img src={Bag} />Quem <strong className="scd">somos</strong></h2>
    </div>

    <div>
      <h2><img  src={Objective} />Obje<strong className="scd">tivo</strong></h2>
    </div>

    <div>
      <h2><img src={Engajament} />Alcan<strong className="scd">ce</strong></h2>
    </div>
</div>

<div  data-anime="right" id="vermaisTXT">

        <p>
         Lorem ipsum dolor sit amet, consectetur  dadipiscing elit. 
         Etiam interdum mauris in nisl tempus euismod.
        </p>

        <p>
         Lorem ipsum dolor sit amet, consectetur  dadipiscing elit. 
         Etiam interdum mauris in nisl tempus euismod.
        </p>

        <p>
         Lorem ipsum dolor sit amet, consectetur  dadipiscing elit. 
         Etiam interdum mauris in nisl tempus euismod.
        </p>

     </div>

  <div  data-anime="left" id="buttonVermais">
     <button>Ver mais</button>
     <button>Ver mais</button>
     <button>Ver mais</button>
  </div> 

  <div  data-anime="right" id="Slogan">
   <img src={Draw2}/>

  <div id="NavegarFooter">
   <h2>
       Faça parte dessa <br />
       <strong className="scd">comunidade</strong>
    </h2>
   <a id="inicio" onClick={scrollSuave}><button>Navegar</button></a>
  </div> 

   <img src={Draw1}/>
  </div>
  </div> 
  <Rodape />
 </>

   )
}

// Função para rolar a pagina para cima
function scrollSuave() {
  const scroll = document.querySelector('#inicio');

 scroll.addEventListener('click', () => {
  window.scroll({top: "700px", behavior: 'smooth'})
  })
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


window.addEventListener('scroll', debounce(function() {
  animationScroll();
  console.log("okay!!");
}, 13));

