import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicacionComponente from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente 
          msg="Hola soy un componente funcional expresado desde una prop">

          </Componente>
          <Propiedades 
          cadena="Esto es una cadena de texto" 
          numero={18} 
          booleano={false}
          arreglo={[1,2,3]} 
          objeto={{
            nombre:"braian",
            edad:23
          }}
          funcion={num=> num*num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<Componente msg="soy un componente pasado como prop"></Componente>}
          />
          <Estado></Estado>
          <RenderizadoCondicional></RenderizadoCondicional>
          <RenderizadoElementos></RenderizadoElementos>
          <EventosES6 msg="prueba"></EventosES6>
          <EventosES7></EventosES7>
          <MasSobreEventos></MasSobreEventos>
          <ComunicacionComponente></ComunicacionComponente>
          <CicloVida></CicloVida>
          {/* hola cambio nuevo desde el pc de mesa */}
          {/* cambio 2 */}
          {/* Cambio desde el portatil */}
      </section>
      </header>
    </div>
  );
}

export default App;
