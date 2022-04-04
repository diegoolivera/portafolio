import './App.css';

//componentes
import NavBar from './componentes/navabar/NavBar';
import Home from './componentes/home/Home';
import Footer from './componentes/footer/Footer';
import Proyectos from './componentes/proyectos/Proyectos';
import SobreMi from "./componentes/sobremi/SobreMi";
import Contacto from './componentes/contacto/Contacto';

function App() {
  return (
    <div className="App">
   
        <NavBar />
        <Home /> 
        <SobreMi/>
        <Proyectos /> 
        <Contacto/>
        <Footer /> 
    
    </div>

    

  )
}

export default App;
