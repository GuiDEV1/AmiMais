import "./style.css";
import Bag from "./Icons/bag.png";
import Dog1 from "./Imagens/Dog1.png";
import Objective from "./Icons/objective.png";
import Cat1 from "./Imagens/cat1.png";
import CatDog from "./Imagens/catAndDog.png";
import Engajament from "./Icons/alcance.png";
import { Interface } from "../../ComponentesConstantes/Interface";
import { Rodape } from "../../ComponentesConstantes/Rodape";

export function Sobrenos () {
   
   return (
 <>
    <Interface />
    <h1 id="h1Sobrenos">Sobre <strong className="scd">nós</strong></h1>
   
      <div className="titleIcon ">
         <h2> <img src={Bag} />Quem <strong className="scd">somos</strong></h2>
      </div>

      <div className="conteudo">
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Nullam pretium cursus consectetur. Nulla tortor dolor, lobortis 
         eu enim vitae, tincidunt tempor enim. Class aptent taciti sociosqu ad 
         litora torquent per conubia nostra, per inceptos himenaeos. wdaaawawdsDonec 
         sagittis eget orci et condimentum. Nulla id augue varius, maximus mi nec, dignissim 
         orci. Suspendisse mollis porttitor ligula in ullamcorper. Nullam 
         eu enim vitae, tincidunt tempor enim. Class aptent taciti sociosqu ad 
         litora torquent per conubia nostra, per inceptos himenaeos. wdaaawawdsDonec 
         sagittis eget orci et condimentum. Nulla id augue varius, maximus mi nec, dignissim 
         orci. Suspendisse mollis porttitor ligula in ullamcorper. Nullam 
         eu enim vitae, tincidunt tempor enim. Class aptent taciti sociosqu ad 
         litora torquent per conubia nostra, per inceptos himenaeos. wdaaawawdsDonec 
         sagittis eget orci et condimentum. Nulla id augue varius, maximus mi nec, dignissim 
         orci. Suspendisse mollis porttitor ligula in ullamcorper. Nullam 
         </p>
         <img id="conteudoimg1" src={Dog1}/>
      </div>

      <div className="titleIcon2">
         <h2><img src={Objective}/> Obje<strong className="scd">tivos</strong></h2>

      </div>

      <div className="conteudo1">
         <img src={Cat1}/>

         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Nullam pretium cursus consectetur. Nulla tortor dolor, lobortis 
         eu enim vitae, tincidunt tempor enim. Class aptent taciti sociosqu ad 
         litora torquent per conubia nostra, per inceptos himenaeos. wdaaawawdsDonec 
         sagittis eget orci et condimentum. Nulla id augue varius, maximus mi nec, dignissim 
         orci. Suspendisse mollis porttitor ligula in ullamcorper. Nullam 
         eu enim vitae, tincidunt tempor enim. Class aptent taciti sociosqu ad 
         litora torquent per conubia nostra, per inceptos himenaeos. wdaaawawdsDonec 
         sagittis eget orci et condimentum. Nulla id augue varius, maximus mi nec, dignissim 
         orci. Suspendisse mollis porttitor ligula in ullamcorper. Nullam 
         eu enim vitae, tincidunt tempor enim. Class aptent taciti sociosqu ad 
         litora torquent per conubia nostra, per inceptos himenaeos. wdaaawawdsDonec 
         sagittis eget orci et condimentum. Nulla id augue varius, maximus mi nec, dignissim 
         orci. Suspendisse mollis porttitor ligula in ullamcorper. Nullam 
         </p>
      </div>

      <div className="titleIcon ">
         <h2> <img src={Engajament} />Alc<strong className="scd">ance</strong></h2>
      </div>

      <div className="conteudo">
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Nullam pretium cursus consectetur. Nulla tortor dolor, lobortis 
         eu enim vitae, tincidunt tempor enim. Class aptent taciti sociosqu ad 
         litora torquent per conubia nostra, per inceptos himenaeos. wdaaawawdsDonec 
         sagittis eget orci et condimentum. Nulla id augue varius, maximus mi nec, dignissim 
         orci. Suspendisse mollis porttitor ligula in ullamcorper. Nullam 
         eu enim vitae, tincidunt tempor enim. Class aptent taciti sociosqu ad 
         litora torquent per conubia nostra, per inceptos himenaeos. wdaaawawdsDonec 
         sagittis eget orci et condimentum. Nulla id augue varius, maximus mi nec, dignissim 
         orci. Suspendisse mollis porttitor ligula in ullamcorper. Nullam 
         eu enim vitae, tincidunt tempor enim. Class aptent taciti sociosqu ad 
         litora torquent per conubia nostra, per inceptos himenaeos. wdaaawawdsDonec 
         sagittis eget orci et condimentum. Nulla id augue varius, maximus mi nec, dignissim 
         orci. Suspendisse mollis porttitor ligula in ullamcorper. Nullam 
         </p>
         <img id="img2" src={CatDog}/>
      </div>

      <Rodape />                   
 </>
   )
}