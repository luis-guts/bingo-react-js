import React, { useState } from 'react';
import './App.css';
import BolaSorteada from './components/BolaSorteada';
import BolaElementoLista from './components/BolaElementoLista'
import {gerarBolinha, sortear} from './services/bingoService';

function App() {
  const [numeroSorteado, setNumeroSorteado] = useState(0);
  const [list, setList] = useState([]);

  const sortear = ()=>{
    const numero = gerarBolinha();
    setNumeroSorteado(numero)
    setList(list => [...list, numero])
  }

  return (
    <div className="App">
      <BolaSorteada letra="B" numero={numeroSorteado} />
      <button onClick={(sortear)}></button>
      {list.map((answer) => {     
           console.log("Entered");                    
           return (<BolaElementoLista letra="B" numero={answer}/>) 
        })}
    </div>
  );
}

export default App;
