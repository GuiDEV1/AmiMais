import { Interface } from "../../../ComponentesConstantes/Interface";
import "./style.css";
import donate from "./imagens/iconDonate.png";
import donatedraw from "./imagens/DonateDraw.png";
import pix from "./imagens/pix.png";
import paypal from "./imagens/paypal.png";
import Boleto from "./imagens/boleto.png";
import visa from "./imagens/visa.png";
import MasterCard from "./imagens/masterCard.png";
import elo from "./imagens/Elo.png";
import compartilhar from "./imagens/compartilharIcon.png";
import LogoPix from "./imagens/logopix.png";
import qrCode from "./imagens/qrCode.png";
import copiar from "./imagens/iconCopiar.png";
import Logoboleto from "./imagens/LogoBoleto.png";
import boleto from "./imagens/BoletoDonate.png";


export function DoacaoOption () {
   
   return (
 <>
 <Interface />
 <DoacaoValor />
 <DoacaoCartao />
 <DoacaoPix />
 <DoacaoBoleto />
 <DoacaoBoleto2 />
 <DoacaoPagamentoEfetuado />
 </>
  )
}

const DoacaoValor = () => {
  return(
     <>
  <div id="Doacao">
    <div id="DoacaoOverlay">
  <div id="headerD">
    <img src={donate} alt="icon-de-doar-amiMais"/>
    <h3>Doa<strong className="scd">ção:</strong></h3>
   </div>   
    <div id="DonateHeader">
     <div>
       <label>Valor para <strong className="scd">doação:</strong></label> <br/>
       <input type={"number"} name="Valor_Da_Doacao" id="valorDonate" placeholder="R$: 00,0"/>
     </div>
      <div>
        <img src={donatedraw} alt="donate-ilustration"/>
      </div>
    </div>

    <div id="areaDePagemnto">
     <label>Formas de <strong className="scd">pagamentos:</strong></label><br/>
     <span>Selecione uma forma de pagamento</span>

  <div id="pagamentoMain">

     <div id="OpcoesDePagamento">
      <img src={pix} alt="pix"/>
      <img src={paypal} alt="paypal"/>
      <img id="boletoM" src={Boleto} alt="Boleto"/>

      <div>
       <span>Debito e credito</span>
      </div>
     </div>

     <div id="OpcoesDePagamento2">
      <img src={visa} alt="Visa"/>
      <img src={MasterCard} alt="MasterCard"/>
      <img id="eloM" src={elo} alt="Elo"/>  
     </div>
   </div>  
   </div>
        <button className="buttonDoar">Doar</button>
   </div>
 </div>
     </>
  )
}

const DoacaoCartao = () => {
  return(
    <>
  <div id="Doacao2">
    <div id="DoacaoOverlay">
     <div id="headerD">
      <img src={donate} alt="icon-de-doar-amiMais"/>
     <div>
      <h3>Doa<strong className="scd">ção:</strong></h3> 
       <p>Informe os dados do cartão</p>
     </div> 
    </div> 

   <div id="forms1">
    <div>
     <label>CPF titular <strong className="scd">do cartão:</strong></label> <br/>
     <input type={"text"} name="TitularCartao" id="Titular" placeholder="Titular do cartão"/> <br/>

     <label>Nome do titular <strong className="scd">do cartão</strong></label>
      <input type={"text"} id="" name="" placeholder="Titular do cartão:"/> 
    </div>
     <div>
        <img src={donatedraw} alt="drawilustrator"/>
     </div>
   </div>  

   <div id="forms2">
    <div id="formsFilho2">
        <div>
         <label>Numero <strong className="scd">do cartão</strong></label> <br/>
         <input type={"number"} name="numeroDoCartao" id="numcartao" placeholder="xxxxx xxxxxx"/>
        </div> 

        <div>
         <label>Código de <strong className="scd">segurança</strong></label> <br/>
         <input type={"number"} name="numeroDoCartao" id="numcartao" placeholder="CVC:XXX"/>
        </div> 
    </div>

    <div id="tpcartao">
    <label>Tipo de <strong className="scd">cartão</strong></label> <br/>
     <select name="tipoDeCartao" id="tpcartao">
       <option>Selecione</option>
       <option value={"debito"}>Débito</option>
       <option value={"credito"}>Crédito</option>
     </select>
    </div>
   </div>
    <button>Doar</button>
    </div>
  </div>
    </>
  )
}

const DoacaoPix = () => {
 return (
  <>
    <div id="Doacao3">
      <div id="DoacaoOverlay">
        <div id="headerDonate">
          <img src={donate} alt="Logo do donate"/>
          <h3>Doa<strong className="scd">ção:</strong></h3>
        </div>

        <div id="pixPai">
           <img id="compartilhar" src={compartilhar} alt="Icone de compartilhamento"/>

           <div className="areaPix">
              <img id="LogoPix" src={LogoPix}/>
              <img src={qrCode} alt="qrCodePix"/>
              <div className="chavePix">
                <div>
                  <h4>Chave pix</h4>
                  <span>0000000-00</span>
                </div>

                <img src={copiar} alt="iconDeCopiar"/>
              </div>
           </div>

           <img id="donateDraw" src={donatedraw} alt="DonateDraw"/>
        </div>
       
        <button>Doar</button>
      </div>
    </div>
  </>
 )
}

const DoacaoBoleto = () => {
  return (
    <>
      <div id="Doacao4">
        <div id="DoacaoOverlay">
          <div id="headerDonate">
            <img src={donate} alt="logo-d0-donate"/>
            <h3>Doa<strong className="scd">ção:</strong></h3> 
          <div id="LogoBoleto">
           <img src={Logoboleto} alt="icone-Boleto"/>
          </div>
          </div>

          <div id="boletoPai">
            <div className="forms">
                <label>Nome <strong className="scd">completo:</strong></label> <br/>
                <input type={"text"} name="nameUser" id="nmuser" required placeholder="Seu nome:"/> <br/>

                <label>CP<strong className="scd">F:</strong></label> <br/>
                <input type={"number"} name="cpfUser" id="cpfuser" required placeholder="Seu cpf:"/> <br/>

                <label>Em<strong className="scd">ail</strong></label> <br/>
                <input type={"email"} name="emailuser" id="emailuser" required placeholder="Seu endereço de email"/> <br/>
            </div>

            <div>
               <img src={donatedraw} alt="draw-ilustration"/>
            </div>
          </div>

            <div className="submit">
             <button>Avançar</button>
            </div> 
        </div>
      </div>
    </>
  )
}

const DoacaoBoleto2 = () => {
  return(
    <>
      <div id="Doacao5">
       <div id="DoacaoOverlay">
        <div id="headerDonate">
              <img src={donate} alt="logo-d0-donate"/>
              <h3>Solicitação <strong className="scd">efetuada</strong></h3> 
        </div>     

          <div className="titleBoleto">
             <img id="logoBoleto" src={Logoboleto} alt="logo da logo do boleto"/>
             <img id="ilustration" src={donatedraw} alt="ilustrtionDraw"/>
          </div>    

          <div className="bodyBoleto">
             <img src={boleto} alt="BoletoPagamento"/>
          </div>

         
          <div className="submit">
             <button>Concluir</button>
            </div> 
       </div>  
      </div>
    </>
  )
}

const DoacaoPagamentoEfetuado = () => {
  return (
    <>
      <div id="Doacao6">
        <div id="DoacaoOverlay">
          <div id="headerDonate">
             <img id="logoDonate" src={donate} alt="Logo donate"/>
             <img id="ilustrationdraw" src={donatedraw} alt="ilustratoDraw"/>
          </div>
        </div>
      </div>
    </>
  )
}