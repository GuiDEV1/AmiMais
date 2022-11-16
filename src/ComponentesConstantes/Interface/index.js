import "./style.css";
import Logo from "./Imagens/amiMaisLogo.png";
import { Sobrenos } from "../../Pages/SobreNos";


export function Interface () {
   
   return ( 
 <>
   <header>
        <img src={Logo} id="Logo"/> 
       

      <div className = 'interface'> 
         <a href="#">Inicio </a> 
         <a onClick={Sobrenos}>Sobre nós </a>
         <a href="#">Resgate</a>
         <a href="#">Curiosidades </a> 
         <a href="#">Login </a> 
         <a href="#">Cadastrar </a>

         <div className="perfilLateral">
          
          </div>
      </div> 
      
     
   
   </header>
 </>
   )
}