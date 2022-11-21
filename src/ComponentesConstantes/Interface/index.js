import "./style.css";
import Logo from "./Imagens/amiMaisLogo.png";
import { Link } from 'react-router-dom';


export function Interface () {
   
   return ( 
 <>
   <header>
        <img src={Logo} id="Logo"/> 
       

      <div className = 'interface'> 
         <Link to="/">Inicio </Link> 
         <Link to="/SobreNos">Sobre nós </Link>
         <Link to="/" >Resgate</Link>
         <Link to="/" >Curiosidades </Link> 
         <Link to="/Reporta">Reporta</Link> 
         <Link to="/" >Login </Link> 
         <Link to="/" >Cadastra-se</Link>
         <div className="perfilLateral">
          </div>
      </div> 
      
   </header>
 </>
   )
}