import logo from './logo.svg';
import './App.css';
import Micomponente from './Micomponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from './EventosComponentes';


function App() {

  const ficha_medica={
    altura:"175cm",
    grupo:"a",
    alergias:"ninguina",
    estado:"bueno"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          bienvenido al master en react
        </p>
        <hr/>
        <EventosComponentes/>


        {/* cargar mi primer componente */}
    <TercerComponente
   /*  nombre="Alejandro"
    apellido="Bovet" */
    ficha={ficha_medica}

    />
    <hr/>
    <SegundoComponente/>
    <hr/>
    <Micomponente/>
    <hr/>
    
      </header>

    

    </div>
  );
}

export default App;
