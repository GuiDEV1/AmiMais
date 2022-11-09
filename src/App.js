import './App.css';
import { Interface } from './ComponentesConstantes/Interface';
import { Footer } from './ComponentesConstantes/Rodape';
import { Home } from './Pages/Home';
import { Sobrenos } from './Pages/SobreNos';

function App() {
  return (
    <>
       <Interface />
       <Sobrenos />
       <Footer />
    </>
  );
}

export default App;
