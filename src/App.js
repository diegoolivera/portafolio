import './App.css';

//router
import {Route , HashRouter as Router,Routes} from 'react-router-dom'
//componentes
import NavBar from './componentes/navabar/NavBar';
import Home from './componentes/home/Home';
import Footer from './componentes/footer/Footer';
import Proyectos from './componentes/proyectos/Proyectos';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home /> 
        <Proyectos /> 
        <Footer /> 
      </Router>
    </div>

    

  )
}

export default App;
