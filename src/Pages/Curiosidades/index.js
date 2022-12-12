import { Interface } from '../../ComponentesConstantes/Interface';
import './style.css';
import pgato from './Imagens/CuriosidadesCat.png';
import cachorroV from './Imagens/cachorroVerde.png';
import gatoV from './Imagens/gatoVerde.png';
import catedog from './Imagens/catedog.png';
import { Rodape } from '../../ComponentesConstantes/Rodape';

function Curiosidades() {

   return (
      <>
         <Interface />

        <div id="Curiosidade">
          
          <h1>Curios<strong className='scd'>idades</strong></h1>

         <div className='Pcuriosidades'>
            <div className='a'>
               <h2 >A castração é a <span className='scd'>melhor solução?</span></h2>
               <p>
                  A castração é tão importante que os especialistas afirmam que é uma prova de amor e de cuidado com o pet. Quando o tutor castra o seu animalzinho ele previne doenças, aumenta o tempo de vida, sem contar a diminuição do número de animais abandonados.
               </p>
            </div>
            <img src={pgato} className="img" />
         </div>


         <div className="tresquadrados">
            <div id='quadrado'>
               <h3>Gatos Podem ser terapeuticos</h3>
               <p>o ronronar deles emitem uma frequência de 18 Hz a 32 Hzque acreditam ser terapêuticos.</p>
               <img id="imgs" className='gatoV' src={gatoV} /> 
            </div>

            <div id='quadrado'>
               <h3>extresse ? aqui não</h3>
               <p>Ter um animal de estimação ajuda com problemas e a lidar com o extresse.
               </p>
               <div id="triangulo"></div>
               <div className='bnt-radius'><p>Incrivel, não ?</p></div>
            </div>

            <div id='quadrado'>
               <h3>pensei que era só 7</h3>
               <p>A idade de um cachorro para a de um humano não é exatamente 1 ano de humano para 7 do cachorro, isso pode depender da raça, porte e a idade.</p>
               <img id="imgs" className='cachorroV' src={cachorroV} />
            </div>

         </div>



         <div className="tcuriosidades">
            <div className='conteudo-tcuriosidades'>
               <h2 className='laranja'><strong>Cães e <span className='scd'>gatos</span></strong></h2>
               <p>
                  A pesar do que a crença popular acha cães e gatos não são inimigos mortais, oque acontece muito é que eles têm um senso territorial muito grande, fazendo com que eles acabem brigando muitas vezes, mas isso dificilmente ocorre se eles forem criados juntos desde a fase de filhote. A castração também auxilia na boa convivência deles.
               </p>
            </div>
            <img src={catedog} />
         </div>
      </div> 

     <Rodape />
      </>
   )
}

export default Curiosidades;