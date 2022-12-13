import { Interface } from "../../ComponentesConstantes/Interface";
import React from 'react'
import "./style.css";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { PreVisualization, PreVisualization3, PreVisualization4, PreVisualization5 } from "./PreVisualizacao";
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IconContext } from "react-icons";

import { PreVisualization2 } from "./PreVisualizacao2";


export function Resgate() {
   return (
      <>

         <div id="Resgate">
            <Interface />
            <Link to={`/SolicitarResgatador`}>
               <div className="SearchRescuer flex">
                  <IconContext.Provider value={{ size: "25px" }}>
                     <BiSearchAlt2 />
                  </IconContext.Provider>
                  <h3>Solicitar Resgatador</h3>
               </div>
            </Link>
            <ApiMap />
         </div>
      </>
   )
}

const ApiMap = () => {
   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAKBnQJjCVtbU0UxiPwW3sT_5kAQBPgdgU"
   });

   const lapafau = {
      lat: -23.52404447510543,
      lng: -46.698488505206015
   }
   const position =
   {
      lat: -23.52245351626641,
      lng: -46.709792343282686
   }

   const position2 = {
      lat: -23.52391444394169,
      lng: -46.70044440667663,
   };

   const position3 = {
      lat: -23.52802840427617,
      lng: -46.69893266827355
   }

   const position4 = {
      lat: -23.52892235931869,
      lng: -46.71608544864796
   }

   const position5 = {
      lat: -23.5298080052948,
      lng: -46.6884906810137
   }

   return (
      <div className="map">
         {isLoaded ? (
            <GoogleMap mapContainerStyle={{ width: "100%", height: "100%" }} center={lapafau} zoom={18}>

               <Marker onClick={preVisuaizacao} position={position2} />
               <div className="saida"><PreVisualization /></div>

               <Marker onClick={preVisuaizacao1} position={position} />
               <div className="saida1"><PreVisualization2 /></div>




            </GoogleMap>
         ) : <></>}
      </div>
   )
}


// Função para aparecer o overlay na tela
function preVisuaizacao() {
   let overlay = document.querySelector(".saida");
   const viewOverlay = "viewOverlay";
   overlay.classList.toggle(viewOverlay);
}

// Funão para segunda ong 11
function preVisuaizacao1() {
   let overlay = document.querySelector(".saida1");
   const viewOverlay1 = "viewOverlay1";
   overlay.classList.toggle(viewOverlay1);
}




