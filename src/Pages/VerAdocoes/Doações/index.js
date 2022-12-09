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



export function DoacaoOption () {
   
   return (
 <>
 <Interface />
  <div id="Doacao">
    <div id="DoacaoOverlay">
    <img src={donate} alt="icon-de-doar-amiMais"/>
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