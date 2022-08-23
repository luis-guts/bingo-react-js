

export const gerarBolinha = ()=> {
    const numero = gerarNumero();
    const letra = verificarLetra(numero)
    console.log(letra)
    return letra + numero;
}

export const armazenarBola = ()=> {
}

const verificarLetra = (numero)=>{
    if(numero > 0 && numero <=15) { return "B"}
    if(numero > 15 && numero <=30) { return "I"}
    if(numero > 30 && numero <=45) { return "N"}
    if(numero > 45 && numero <=60) { return "G"}
    if(numero > 60 && numero <=75) { return "O"}
    throw new Error("numero invalido")
         
}

const gerarNumero = () => {
    return Math.floor(Math.random() * (75 - 1 + 1)) + 1;
}


