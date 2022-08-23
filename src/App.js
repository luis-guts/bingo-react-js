import React, { useState } from 'react';
import './App.css';
import BolaSorteada from './components/BolaSorteada';
import BolaElementoLista from './components/BolaElementoLista'
import {gerarBolinha, sortear} from './services/bingoService';

function App() {
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [list, setList] = useState([]);

  const sortear = ()=>{
    const numero = gerarBolinha();
    setNumeroSorteado(numero)
    console.log(numero)
    setList(list => [...list, numero])
    console.log(JSON.stringify(list))
  }

  return (
    <div className="App">
      <BolaSorteada numero={numeroSorteado} />
      <button onClick={(sortear)}></button>
      {list.map((answer) => {     
           console.log("Entered");                    
           return (<BolaElementoLista numero={answer}/>) 
        })}
    </div>
  );
}

export default App;
