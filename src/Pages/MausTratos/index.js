import { Interface } from "../../ComponentesConstantes/Interface";
import "./style.css";
import mausTratos1 from "./Imagens/Reporta2_2.png";
import mausTratos2 from "./Imagens/MausTratos2.png";
import { Rodape } from "../../ComponentesConstantes/Rodape";
import Girl from "./Imagens/HappyGirl.png";

export function MausTratos () {
   
   return (
 <>
    <Interface />
   <div id="MausTratos">

      <h1>Maus <strong className="scd">Tratos</strong></h1>
      <div id="headerimg">
      <img src={mausTratos2} alt="headerimg" />
      <img src={mausTratos1} alt="headerimg" />
      </div>
      <h2>Denu<strong className="scd">ncie</strong></h2>

       <div id="footerPai">

          <div id="Conteudo1">
            <img src={Girl} alt="Uma moça sorridente"/>

          <p>
            Denuncie ao orgão responsavel por maus trato de animais , 
            sua atitude salva vidas , ao aperta o botão logo abaixo 
            será redrecionado para o orgão responsavel .
          </p>
          </div>

          <div id="Conteudo2">
              <div>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quisque sed venenatis urna, in porta enim. Quisque tristique, 
                  orci vel  <br/><br/>

                  commodo rutrum, sapien elit eleifend lacus, euismod fermentum 
                  erat ex eget lacus. Aliquam ornare nec quam id scxcs 
                </p>   
              </div>
              <button>Denunciar</button>
          </div>
       </div>
  </div> 
  <Rodape/>
 </>
   )
}