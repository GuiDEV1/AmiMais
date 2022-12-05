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
import { Link } from 'react-router-dom';



export function Home () {

   return (
 <>
    <Interface />
   <div id="Home" >
     <div  className="carroselHome">
      <div className='menuHome'>
        <div className='iconsMenu'>
          <img src={Resgatar} alt="Icone de resgate"/>
          <img src={Buscar} alt="Icone de buscar adoções"/>
          <img src={Resgatador} alt="Icone de solicitar resgatador"/>
         </div>

          <div className='tiltleMenu'>
              <h3 id="title1" onClick={TrasitionAdocao}>Resgate <br /> um animal</h3>
              <h3 id="title2" onClick={TrasitionAdocao2}>Buscar por <br /> adoções</h3>
              <h3 id="title3" onClick={TrasitionAdocao3}>Solicitar um <br /> resgatador</h3>  
          </div>  
              <hr />
              <h1 id='titleICons'>Faça a diferença</h1>
              <span id="titleSpan">Salvando a vida de um animalzinho</span> <br />
              
            <Link to="/Cadastrar"><button id='buttonMenuHome'>Cadastre-se</button></Link> 
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

     <div  data-anime="left" className="paraParaquem">
       <p>
       Qualquer pessoa que tem como missão de vida ajudar animais em situação 
       de rua e queira fazer parte da nossa plataforma.    
      </p>

     <p>
        Qualquer pessoa que quer ajudar, pode se cadastrar em nossa plataforma e 
        fazer doações,registrar a localização de algum animal ou colaborar com outros 
        resgatadores.
      </p>

      <p>
        Instituições que tem como meta ajudar a dar um novo lar para pets em situação de rua, 
        e colaborar com nossa plataforma       
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
        Somos uma plataforma web que conecta pessoas com 
        resgatadores de animais
        </p>

        <p>
           Nosso objetivo é diminuir a população de animais em situação 
           de rua.  
        </p>

        <p>
        Nosso público alvo é resgatadores, ongs e pessoas que tem iniciativa 
        de ajudar. 
        </p>

     </div>

  <div  data-anime="left" id="buttonVermais">
    <Link to="/SobreNos/"><button>Ver mais</button></Link>
    <Link to="/SobreNos/"><button>Ver mais</button></Link>
    <Link to="/SobreNos/"><button>Ver mais</button></Link>
  </div> 

  <div  data-anime="right" id="Slogan">
   <img src={Draw2}/>

  <div id="NavegarFooter">
   <h2>
       Faça parte dessa <br />
       <strong className="scd">comunidade</strong>
    </h2>
   <button id="inicio" onClick={scrollSuave}>Navegar</button>
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

 // evento do scroll 
window.addEventListener('scroll', debounce(function() {
  animationScroll();
  console.log("okay!!");
}, 14));

// Função para transição do carrosel na home. 
function TrasitionAdocao2(color,menu) {
 
  // Configuração da imagem na div
 color = document.querySelector(".carroselHome");
 color.style.backgroundImage = "url(https://cdn.discordapp.com/attachments/773372240686350356/1048788222664249444/markus-winkler-PcKhVNNyEio-unsplash.jpg)";
 color.style.backgroundSize = "cover";
 color.style.backgroundPosition = "center 70%";

 // Marcação de link
 menu = document.querySelector("#title2");
 menu.style.borderBottom = "5.5px solid #000";

 //para remover dos outros elementos
 document.querySelector("#title3").style.borderBottom = "none";
 document.querySelector("#title1").style.borderBottom = "none";

// Muda o titulo do carrosel e e mini titulo.
 document.querySelector("#titleICons").innerHTML = "veja adoções";
 document.querySelector("#titleSpan").innerHTML = "que estão proximas de você";
}

function TrasitionAdocao3 (color,menu) {
   // Troca a imagem de fundo da div
  color = document.querySelector(".carroselHome");
  color.style.backgroundImage = "url(https://cdn.discordapp.com/attachments/773372240686350356/1048808288038420592/menuHome3.jpg)";
  color.style.backgroundSize = "cover";
  color.style.backgroundPosition = "center 53%";
 
  // Marcação de link
  menu = document.querySelector("#title3");
  menu.style.borderBottom = "5.5px solid #000";

  //para remover dos outros elementos
  document.querySelector("#title2").style.borderBottom = "none";
  document.querySelector("#title1").style.borderBottom = "none";

 // Muda o titulo do carrosel e e mini titulo.
 document.querySelector("#titleICons").innerHTML = "Solcite um ";
 document.querySelector("#titleSpan").innerHTML = "Resgatador para ajudalo";
}

function TrasitionAdocao (color,menu) {
  // Troca a imagem de fundo da div
  color = document.querySelector(".carroselHome");
  color.style.backgroundImage = "url(https://cdn.discordapp.com/attachments/773372240686350356/1048793614542708776/dogHome.jpg)";
  color.style.backgroundSize = "cover";
  color.style.backgroundPosition = "center 29%";
 
  // Marcação de link
  menu = document.querySelector("#title1");
  menu.style.borderBottom = "5.5px solid #000";

  //para remover dos outros elementos
  document.querySelector("#title2").style.borderBottom = "none";
  document.querySelector("#title3").style.borderBottom = "none";

// Muda o titulo do carrosel e e mini titulo.
document.querySelector("#titleICons").innerHTML = "Faça a diferença";
document.querySelector("#titleSpan").innerHTML = "Salvando a vida de um animalzinho";
}