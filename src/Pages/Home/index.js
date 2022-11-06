import './style.css';
import Resgatar from "./Icons/resgatar.png";
import Buscar from "./Icons/BuscarAdocoes.png";
import Resgatador from "./Icons/Resgatador.png";


export function Home () {
   
   return (
 <>
     <div className="carroselHome">
      <div className='menuHome'>
        <div className='iconsMenu'>
          <img src={Resgatar} />
          <img src={Buscar} />
          <img src={Resgatador} />
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
    
 </>
   )
}