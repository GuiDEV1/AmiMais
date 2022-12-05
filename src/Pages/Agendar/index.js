import { Interface } from "../../ComponentesConstantes/Interface";
import "./style.css";
import Pong from "./Imagens/logoEmpresa.jpg";
import DrawHeader from "./Imagens/DrawHeader.png";
import sectionPet1 from "./Imagens/sectionPet1.png";
import sectionPet2 from "./Imagens/sectionPet2.png";
import sectionPet3 from "./Imagens/sectionPet3.png";

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
          <img id="dog1" src={sectionPet1} alt="Selecionar cachorro?"/>
        </div>

        <div>
          <h3><strong className="scd">Gato</strong></h3>
          <img src={sectionPet2} alt="Selecionar Gato?"/>
        </div>

        <div>
          <h3>Out<strong className="scd">ros</strong></h3>
          <img src={sectionPet3} alt="Selecionar Outros?"/>
        </div>
      </div>

      <form method="Post" action="">
       <div id="forms1">
        <label>Nome <strong className="scd">completo:</strong></label> <br/>
         <input type={"text"} name="nomeDoUsuario" id="nameUser" required placeholder="Seu nome:"/><br/>

         <label>Nome de <strong className="scd">usuário:</strong></label> <br/>
         <input type={"text"} name="nickDeUsuario" id="nickUser" required placeholder="@joao14:"/><br/>

         <label>Dia da <strong className="scd">semana:</strong></label> <br/>
         <select id="diaNaSemana" name="diaNaSemana">
            <option>Dia da semana</option>
            <option value="Segunda">Segunda feira</option>
            <option value="Terça">Terça feira</option>
            <option value="Quarta">Quarta feira</option>
            <option value="Quinta">Quinta feira</option>
            <option value="Sexta">Sexta feira</option>
         </select> <br/>

         <label>Hor<strong className="scd">ário:</strong></label> <br/>
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

      <div id="forms2">
        <label>O animal é castrado ?</label>  <br/>
        <input type={"radio"} id="P1sim" name="agendamentoPerguntas1" value={"sim"}/> Sim <br/>
        <input type={"radio"} id="P1nao" name="agendamentoPerguntas1" value={"nao"}/> não <br/>
        <input type={"radio"} id="P1naosei" name="agendamentoPerguntas1" value={"naosei"}/> nãos sei <br/>

        <label>O animal é vermifugado ?</label>  <br/>
        <input type={"radio"} id="P2sim" name="agendamentoPerguntas2" value={"sim"}/> Sim <br/>
        <input type={"radio"} id="P2nao" name="agendamentoPerguntas2" value={"nao"}/> não <br/>
        <input type={"radio"} id="P2naosei" name="agendamentoPerguntas2" value={"naosei"}/> não sei <br/>

        <label>O animal tomou o medicamento<br/>ant-pulgas</label>  <br/>
        <input type={"radio"} id="P3sim" name="agendamentoPerguntas3" value={"sim"}/> Sim <br/>
        <input type={"radio"} id="P3nao" name="agendamentoPerguntas3" value={"nao"}/> Não <br/>
        <input type={"radio"} id="P3naosei" name="agendamentoPerguntas3" value={"naosei"}/> Não sei <br/>

        <label>O animal foi examinado ?</label>  <br/>
        <input type={"radio"} id="Psim" name="agendamentoPerguntas" value={"sim"}/> Sim <br/>

        <label>O animal está limpo ?</label>  <br/>
        <input type={"radio"} id="Psim" name="agendamentoPerguntas" value={"sim"}/> Sim <br/>


      </div>
      </form>
   </div>
 </>
   )
}