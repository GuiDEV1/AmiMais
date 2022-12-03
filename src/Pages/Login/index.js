import './style.css';
import Tablet from "./Imagens/tablet.png";

import { Interface } from '../../ComponentesConstantes/Interface';
import { FooterMin } from '../../ComponentesConstantes/FooterMin';
import facebook from "./Imagens/facebook.png";
import google from "./Imagens/google.png";
import twiter from "./Imagens/twiter.png";

export function Login() {

   return (

      <>
         <Interface />
      <div id="Login">
         <div className="box">

            <img className="tablet" src={Tablet} />

            <div className="formulario">

               <h1 className="text-login">Log<strong className="scd">in</strong></h1>

               <form method="post">

                  <div >

                     <label id="label-form">E-mail:</label><br />
                     <input id="input-form" type="email" name='email' placeholder='exemplo@gmail.com' /><br />

                     <label id="label-form">Senha:</label><br />
                     <input className="input-visu" id="input-form" type="password" name='senha' placeholder='Digite sua senha'/>
                    
                     <br />

                     <div className="zona-select-senha">
                        <input type="checkbox" id="check" name="Lembre de mim"/>
                        <label>Lembrar-me</label>
                        <a href="/">Esqueceu a senha?</a>
                     </div>

                     <div id="buttom-entrar">
                        <input type={"submit"} id="Login" name='Entrar' value="Login"/>
                     </div>


                  </div>

               </form>

               <div>

                  <div className="text">
                     <h2 className="ou">ou</h2>
                     <h3> Faça Login com</h3>
                  </div>

                  <div id="redeSocial">
                        <button id="face"><img src={facebook} /> Facebook</button>
                        <button id="google"><img src={google} /> Go<strong id="scd1">og</strong><strong id="scd2">le</strong></button>
                        <button id="twiter"><img src={twiter} /> Twiter</button>
                     </div>

               </div>

            </div>
         </div>
      </div>   
        <FooterMin /> 
      </>
   )
}