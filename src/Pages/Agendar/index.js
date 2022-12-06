import { Interface } from "../../ComponentesConstantes/Interface";
import "./style.css";
import Pong from "./Imagens/logoEmpresa.jpg";
import DrawHeader from "./Imagens/DrawHeader.png";
import sectionPet1 from "./Imagens/sectionPet1.png";
import sectionPet2 from "./Imagens/sectionPet2.png";
import sectionPet3 from "./Imagens/sectionPet3.png";
import { Rodape } from "../../ComponentesConstantes/Rodape";
import dogFooter from "./Imagens/footerAgendar (1).png";

export function Agendar () {
   
   return (
 <>
 <Interface />
  <div id="Agendar">
     
     <div id="headerMain">
       <h1>Agenda<strong className="scd">mento</strong></h1>
       <div id="perfilHeader">
        <div id="UserPerfil">
          <img src={Pong} alt="Foto de perfil da empresa"/>
          <h3>Go <strong className="scd">pet</strong></h3>
        </div>

        <div id="ilustration">
          <img src={DrawHeader} alt="DrawIlustrator" />
        </div>
      </div>

     </div>

     <h2>Selecione o <strong className="scd">tipo de animal</strong></h2>

      <div id="sectionPetMain">
        <div>
          <h3>Cachorro</h3>
          <img onClick={selectTypePet} id="dog1" src={sectionPet2} alt="Selecionar cachorro?"/>
        </div>

        <div>
          <h3><strong className="scd">Gato</strong></h3>
          <img onClick={selectTypePet2} id="dog2" src={sectionPet1} alt="Selecionar Gato?"/>
        </div>

        <div>
          <h3>Out<strong className="scd">ros</strong></h3>
          <img onClick={selectTypePet3} id="dog3" src={sectionPet3} alt="Selecionar Outros?"/>
        </div>
      </div>

      <form method="Post" action="">
       <div id="forms1">
        <label>Nome <strong className="scd">completo:</strong></label> <br/>
         <input type={"text"} name="nomeDoUsuario" id="nameUser" required placeholder="Seu nome:"/><br/>

         <label>Nome de <strong className="scd">usuário:</strong></label> <br/>
         <input type={"text"} name="nickDeUsuario" id="nickUser" required placeholder="@joao14:"/><br/>

         <label id="lb1">Dia da <strong className="scd">semana:</strong></label> <br/>
         <select id="diaNaSemana" name="diaNaSemana">
            <option>Dia da semana</option>
            <option value="Segunda">Segunda feira</option>
            <option value="terca">Terça feira</option>
            <option value="quarta">Quarta feira</option>
            <option value="quinta">Quinta feira</option>
            <option value="sexta">Sexta feira</option>
         
         </select> <br/>

         <label id="lb2">Hor<strong className="scd">ário:</strong></label> <br/>
          <select>
            <option>Escolha um horário</option>
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
          </select>
       </div>  
    
   <div id="FooterForms">

    <div id="formsPai">
      <div id="forms2">
        <label>O animal é <strong className="scd">castrado ?</strong></label>  <br/><br/>
        <input type={"radio"} id="P1sim" name="agendamentoPerguntas1" value={"sim"}/> Sim <br/>
        <input type={"radio"} id="P1nao" name="agendamentoPerguntas1" value={"nao"}/> não <br/>
        <input type={"radio"} id="P1naosei" name="agendamentoPerguntas1" value={"naosei"}/> não sei <br/> <br/>

        <label>O animal é <strong className="scd">vermifugado ?</strong></label>  <br/> <br/>
        <input type={"radio"} id="P2sim" name="agendamentoPerguntas2" value={"sim"}/> Sim <br/>
        <input type={"radio"} id="P2nao" name="agendamentoPerguntas2" value={"nao"}/> não <br/>
        <input type={"radio"} id="P2naosei" name="agendamentoPerguntas2" value={"naosei"}/> não sei <br/> <br/>

        <label>O animal tomou o <strong className="scd">medicamento</strong><br/>ant-pulgas</label>  <br/> <br/>
        <input type={"radio"} id="P3sim" name="agendamentoPerguntas3" value={"sim"}/> Sim <br/>
        <input type={"radio"} id="P3nao" name="agendamentoPerguntas3" value={"nao"}/> Não <br/>
        <input type={"radio"} id="P3naosei" name="agendamentoPerguntas3" value={"naosei"}/> Não sei <br/> <br/>

        <label>O animal foi <strong className="scd">examinado ?</strong></label>  <br/> <br/>
        <input type={"radio"} id="P4sim" name="agendamentoPerguntas4" value={"sim"}/> Sim <br/>
        <input type={"radio"} id="P4nao" name="agendamentoPerguntas4" value={"nao"}/> Não <br/>
        <input type={"radio"} id="P4naosei" name="agendamentoPerguntas4" value={"naosei"}/> Não sei <br/> <br/>

        <label>O animal <strong className="scd">está limpo ?</strong></label>  <br/> <br/>
        <input type={"radio"} id="P5sim" name="agendamentoPerguntas5" value={"sim"}/> Sim <br/>
        <input type={"radio"} id="P5nao" name="agendamentoPerguntas5" value={"nao"}/> Não <br/>
        <input type={"radio"} id="P5naosei" name="agendamentoPerguntas5" value={"naosei"}/> Não sei <br/> <br/>

      </div>  
      <div id="submitAgendar">
           <input type={"submit"} value="Agendar"/>
        </div>
      </div>
       
       <div id="buttonforms">
          <img src={dogFooter} alt="cahorro fofo com uma bana na cabeça"/> 
       </div>
    </div> 
      </form>
   </div>
   <Rodape /> 
 </>
   )
}

function selectTypePet () {

  document.querySelector("#dog1").style.border = "6px solid blue";
  document.querySelector("#dog1").style.filter = "brightness(100%)";
  
  document.querySelector("#dog2").style.border = "none";
  document.querySelector("#dog2").style.filter = "brightness(70%)";

  document.querySelector("#dog3").style.border = "none";
  document.querySelector("#dog3").style.filter = "brightness(70%)";
  
}

function selectTypePet2 () {

  document.querySelector("#dog2").style.border = "6px solid blue";
  document.querySelector("#dog2").style.filter = "brightness(100%)";
  
  document.querySelector("#dog1").style.border = "none";
  document.querySelector("#dog1").style.filter = "brightness(70%)";

  document.querySelector("#dog3").style.border = "none";
  document.querySelector("#dog3").style.filter = "brightness(70%)";

}

function selectTypePet3 () {

  document.querySelector("#dog3").style.border = "6px solid blue";
  document.querySelector("#dog3").style.filter = "brightness(100%)";
  
  document.querySelector("#dog2").style.border = "none";
  document.querySelector("#dog2").style.filter = "brightness(70%)";

  document.querySelector("#dog1").style.border = "none";
  document.querySelector("#dog1").style.filter = "brightness(70%)";

}