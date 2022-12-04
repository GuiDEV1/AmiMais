import { FooterMin } from "../../ComponentesConstantes/FooterMin";
import { Interface } from "../../ComponentesConstantes/Interface";
import "./style.css";
import svgDraw from "./Imagens/cadastrarDraw.png";
import facebook from "./Imagens/facebook.png";
import google from "./Imagens/google.png";
import twiter from "./Imagens/twiter.png";


export function Cadastrar() {
   return (
      <>
         <Interface />
         <div id="Cadastrar">
            <div id="main">
               <div id="cadastro">
                  <h1>Cadastrar <strong className="scd">Conta</strong></h1>
                  <span>Para criar sua conta preencha os campos</span>

                  <h4>Tipo de cadastro</h4>
                  <form id="selectS" method="post" action="">
                     <CadastroUsuario2 />
                  </form>

               </div>
               <div id="cadastrarimg">
                  <img src={svgDraw} />
               </div>
            </div>
         </div>
         <FooterMin />
         <CadastroUsuario />
      </>
   )
}

const CadastroUsuario = () => {
   return (
      <>
           
      </>

   )
}



const CadastroUsuario2 = () => {
   return (
      <>
         <div className="grid">
            <div>
               <label>Email:</label> <br />
               <input className="gridIcon" name="email" type={"email"} placeholder="Seuemail@gmail.com" required></input> <br />
            </div>
            <div>
               <label>Email:</label> <br />
               <input className="gridIcon" name="email" type={"email"} placeholder="Seuemail@gmail.com" required></input> <br />
            </div>
            <div>
            <label>Email:</label> <br />

            <input className="gridIcon" name="email" type={"email"} placeholder="Seuemail@gmail.com" required></input> <br />
            </div>
         </div>
         <input id="next" type={"submit"} value="Continuar" />
      </>

   )
}