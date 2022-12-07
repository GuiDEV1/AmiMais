import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { Chat } from './Pages/Resgatador/Chat';
import { Notifications } from './Pages/Resgatador/Notifications';
import { Sobrenos } from './Pages/SobreNos';
import { Reporta } from './Pages/Reporta';
import { CallRescue } from './Pages/SolicitarResgatador';
import { Rescue1 } from './Pages/Resgatador/Rescue1';
import { Rescue2 } from './Pages/Resgatador/Rescue2';
import { Rescue3 } from './Pages/Resgatador/Rescue3';
import { Rescue4 } from './Pages/Resgatador/Rescue4';
import { Rescue5 } from './Pages/Resgatador/Rescue5';
import { Rescue6 } from './Pages/Resgatador/Rescue6';
import { Rescue7 } from './Pages/Resgatador/Rescue7';
import { Rescue8 } from './Pages/Resgatador/Rescue8';
import { Rescue9 } from './Pages/Resgatador/Rescue9';
import { Rescue10 } from './Pages/Resgatador/Rescue10';
import { Rescue11 } from './Pages/Resgatador/Rescue11';
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
          <Route path="Chat" element={<Chat />} />
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