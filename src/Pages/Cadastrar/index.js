// React Default
import React from 'react';
import { useState } from 'react';
import Forms from './Forms';


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
         <div id="REGISTER">
            <div id="selectS" >
               <div id="Cadastrar">
                  <div id="main">
                     <Forms />
                  </div>
               </div>

            </div>
         </div>
         <FooterMin />
      </>
   )
}