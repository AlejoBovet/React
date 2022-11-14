import logo from './logo.svg';
import './App.css';
import PruebasComponent from './components/PruebasComponent';
import { Ajaxcomponent } from './components/Ajaxcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < PruebasComponent/>

        <br/>

        < Ajaxcomponent/>


      </header>
    </div>
  );
}

export default App;
