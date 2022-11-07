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
//import traco from "./Icons/tracoMenu.png";



export function Home () {
   
   return (
 <>
     <div className="carroselHome">
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
              
              <button id='buttonMenuHome'>Cadastra-se</button>
       </div>   
     </div>

       <h2><strong className="scd">Para</strong> quem?</h2>

       <div className="imgBody">
         <img src={Resgatadores} />
         <img src={PeopleHappy} />
         <img src={Empresas} /> 
       </div>
    
      <div className="titleParaquem">
        <h3>Resgat<strong className="scd">adores(a)</strong></h3>
        <h3>Pessoas c<strong className="scd">omo você</strong></h3>
        <h3>Instituições<strong className="scd">/ongs</strong></h3>
      </div>

     <div className="titleParaquem">
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

  <div id="catBody">

   </div>

   <div className="information">

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
    
 </>
   )
}