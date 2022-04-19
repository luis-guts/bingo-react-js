import './App.css';
import BolaSorteada from './components/BolaSorteada';
import BolaElementoLista from './components/BolaElementoLista'

function App() {
  return (
    <div className="App">
      <BolaSorteada letra="B" numero="1" />
      <BolaElementoLista letra="B" numero="1"/>
    </div>
  );
}

export default App;
