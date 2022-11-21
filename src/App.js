import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Reporta } from './Pages/Reporta';
import { Sobrenos } from './Pages/SobreNos';

function App() {
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="Reporta" element={<Reporta/>}/>
           <Route path="SobreNos" element={<Sobrenos/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
