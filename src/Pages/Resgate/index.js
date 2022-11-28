import { Interface } from "../../ComponentesConstantes/Interface";
import React from 'react'
import "./style.css";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { PreVisualization } from "./PreVisualizacao";



export function Resgate () {
return (
  <>
     
  <div id="Resgate">
    <Interface/>
     <ApiMap/>
  </div>  
  </>
)
}

const ApiMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAKBnQJjCVtbU0UxiPwW3sT_5kAQBPgdgU"
  });
  
  const position =
   {
      lat: -23.5232972,
      lng: -46.7095502
   }

   return (
    <div className="map">
       {isLoaded ? (
          <GoogleMap
             mapContainerStyle={{ width: "100%", height: "100%" }}
             center={position}
             zoom={18}

          >
             <Marker onClick={preVisuaizacao} position={position} />
             <div className="saida"><PreVisualization/></div>
         

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




