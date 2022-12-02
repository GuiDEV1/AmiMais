import { FooterMin } from "../../ComponentesConstantes/FooterMin";
import { Interface } from "../../ComponentesConstantes/Interface";
import "./style.css";
import svgDraw from "./Imagens/cadastrarDraw.png";
import facebook from "./Imagens/facebook.png";
import google from "./Imagens/google.png";
import twiter from "./Imagens/twiter.png";


export function Cadastrar () {
   
   return (
 <>
   <Interface />
  <div id="Cadastrar">
    <div id="main">
       <div id="cadastro">
          <h1>Cadastrar <strong className="scd">Conta</strong></h1> 
          <span>Para criar sua conta preencha os campos</span>

          <h4>Tipo de cadastro</h4>
          <form id="selectS" action="" method="post">
            <select id="tipo_de_cadastro" name="tipo_de_cadastro">
               <option value="usuario_comum">Usuario comum</option>
               <option value="resgatador">Resgatador</option>
               <option value="Ong">ONG-instituição</option>
            </select>
      

          <h5>Crie sua conta com:</h5>
          <div id="redeSocial">
             <button id="face"><img src={facebook}/> Facebook</button>
             <button id="google"><img src={google}/> Go<strong id="scd1">og</strong><strong id="scd2">le</strong></button>
             <button id="twiter"><img src={twiter}/> Twiter</button>
          </div>

          <h5>Ou</h5>
         
          <label>Email:</label> <br/>
          <input id="email" name="email" type={"email"} placeholder="Seuemail@gmail.com" required></input> <br/>
         </form>

         <div id="next">
          <button>Continuar</button>
         </div>  
       </div>
       <div id="cadastrarimg">
          <img src={svgDraw}/>
       </div>
    </div>
  </div> 
    <FooterMin />
 </>
   )
}