import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { Notifications } from './Pages/Resgatador/Notifications';
import { Sobrenos } from './Pages/SobreNos';
import { Reporta } from './Pages/Reporta';
import { CallRescue } from './Pages/SolicitarResgatador';

// Import chat
import { Chat } from './Pages/Resgatador/Chat/Chat_Default';
import { Chat1 } from './Pages/Resgatador/Chat/Chat1';
import { Chat2 } from './Pages/Resgatador/Chat/Chat2';
import { Chat3 } from './Pages/Resgatador/Chat/Chat3';
import { Chat4 } from './Pages/Resgatador/Chat/Chat4';
import { Chat5 } from './Pages/Resgatador/Chat/Chat5';
import { Chat6 } from './Pages/Resgatador/Chat/Chat6';
import { Chat7 } from './Pages/Resgatador/Chat/Chat7';
import { Chat8 } from './Pages/Resgatador/Chat/Chat8';
import { Chat9 } from './Pages/Resgatador/Chat/Chat9';
import { Chat10 } from './Pages/Resgatador/Chat/Chat10';
import { Chat11 } from './Pages/Resgatador/Chat/Chat11';

// Import Rescue
import { Rescue1 } from './Pages/Resgatador/Rescue/Rescue1';
import { Rescue2 } from './Pages/Resgatador/Rescue/Rescue2';
import { Rescue3 } from './Pages/Resgatador/Rescue/Rescue3';
import { Rescue4 } from './Pages/Resgatador/Rescue/Rescue4';
import { Rescue5 } from './Pages/Resgatador/Rescue/Rescue5';
import { Rescue6 } from './Pages/Resgatador/Rescue/Rescue6';
import { Rescue7 } from './Pages/Resgatador/Rescue/Rescue7';
import { Rescue8 } from './Pages/Resgatador/Rescue/Rescue8';
import { Rescue9 } from './Pages/Resgatador/Rescue/Rescue9';
import { Rescue10 } from './Pages/Resgatador/Rescue/Rescue10';
import { Rescue11 } from './Pages/Resgatador/Rescue/Rescue11';

import { VerAdocoes } from './Pages/VerAdocoes';


import {Resgate} from './Pages/Resgate'
import { MausTratos } from "./Pages/MausTratos";
import { Agendar } from "./Pages/Agendar";
import { Cadastrar } from "./Pages/Cadastrar";
import { Login } from "./Pages/Login";
import Curiosidades from "./Pages/Curiosidades";
import { DoacaoOption } from "./Pages/VerAdocoes/Doações";
var asd = "Resgatador";

function App() {

  return (
    <html> <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Sobrenos" element={<Sobrenos />} />
          <Route path="SolicitarResgatador" element={<CallRescue />} />
          <Route path="Reportar" element={<Reporta />} />
          <Route path="MausTratos" element={<MausTratos />} />
          <Route path="Resgate" element={<Resgate />} />
          <Route path="Agendar" element={<Agendar />} />
          <Route path="Cadastrar" element={<Cadastrar />} />
          <Route path="Login" element={<Login />} />
          <Route path="Curiosidades" element={<Curiosidades />} />
          <Route path="Rescue1" element={<Rescue1 />} />
          <Route path="Rescue2" element={<Rescue2 />} />
          <Route path="Rescue3" element={<Rescue3 />} />
          <Route path="Rescue4" element={<Rescue4 />} />
          <Route path="Rescue5" element={<Rescue5 />} />
          <Route path="Rescue6" element={<Rescue6 />} />
          <Route path="Rescue7" element={<Rescue7 />} />
          <Route path="Rescue8" element={<Rescue8 />} />
          <Route path="Rescue9" element={<Rescue9 />} />
          <Route path="Rescue10" element={<Rescue10 />} />
          <Route path="Rescue11" element={<Rescue11 />} />
          <Route path="VerONG" element={<VerAdocoes />} />
          <Route path="Chat" element={<Chat />} />
          <Route path="Chat1" element={<Chat1 />} />
          <Route path="Chat2" element={<Chat2 />} />
          <Route path="Chat3" element={<Chat3 />} />
          <Route path="Chat4" element={<Chat4 />} />
          <Route path="Chat5" element={<Chat5 />} />
          <Route path="Chat6" element={<Chat6 />} />
          <Route path="Chat7" element={<Chat7 />} />
          <Route path="Chat8" element={<Chat8 />} />
          <Route path="Chat9" element={<Chat9 />} />
          <Route path="Chat10" element={<Chat10 />} />
          <Route path="Chat11" element={<Chat11 />} />



          <Route path="Notifications" element={<Notifications />} />
          {/* Declaraçãod e rotas das abas de doações */}
          <Route path="DoacaoOption" element={<DoacaoOption />} />
        </Routes>
      </Router>
      <body>
        
      </body>
    </html>
  );
}

export default App;