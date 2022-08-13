import './App.css';
import Converter from './components/Converter';

function App() {
  return (
    <div className="wrapper">
      <h1>Conversor de Moedas</h1>
      <div className="row">
        <Converter currency1="USD" currency2="BRL"></Converter>
        <Converter currency1="BRL" currency2="USD"></Converter>
      </div>
      <div className="row">
        <Converter currency1="CAD" currency2="BRL"></Converter>
        <Converter currency1="BRL" currency2="CAD"></Converter>
      </div>
      <div className="row">
        <Converter currency1="EUR" currency2="BRL"></Converter>
        <Converter currency1="BRL" currency2="EUR"></Converter>
      </div>
    </div>
  );
}

export default App;
