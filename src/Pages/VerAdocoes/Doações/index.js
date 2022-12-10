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



export function DoacaoOption () {
   
   return (
 <>
 <Interface />
 <DoacaoValor />
 <DoacaoCartao />
 <DoacaoPix />
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

        <div id="pixpai">
          <div>
            <img src={compartilhar} alt="icon compartilhar"/>
          </div>

          <div className="areaPix">
            <img id="logopix" src={LogoPix}/>
            <img id="qrcode" src={qrCode}/>
            <div>Conteudo</div>
          </div>

          <div className="draw">
            <img src={donatedraw}/>
          </div>
        </div>
      </div>
    </div>
  </>
 )
}