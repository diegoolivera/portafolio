import './App.css';

//router
import { HashRouter as Router} from 'react-router-dom'
//componentes
import NavBar from './componentes/navabar/NavBar';
import Home from './componentes/home/Home';
import Footer from './componentes/footer/Footer';
import Proyectos from './componentes/proyectos/Proyectos';
import Habilidades from './componentes/habilidades/Habilidades';
import SobreMi from "./componentes/sobremi/SobreMi";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home /> 
        <SobreMi/>
        <Habilidades/>
        <Proyectos /> 
        <Footer /> 
      </Router>
    </div>

    

  )
}

export default App;
