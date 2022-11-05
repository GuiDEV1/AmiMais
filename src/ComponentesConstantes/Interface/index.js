import "./style.css";
//import Imagens from './AmiMais\src\ComponentesConstantes\Imagens\amimaisLogo.png';

export function Interface () {
   
   return ( 
 <>
     
   <header>
 <div className = 'imgMenu'> 
   <img src="https://media.discordapp.net/attachments/834862603792285717/1037725076126179328/amimaisLogo.png" />
</div>     

      <div className = 'interface'> 
         <a href="#">Inicio </a> 
         <a href="#">Sobre nós </a>
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