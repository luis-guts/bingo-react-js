

export const gerarBolinha = ()=> {
    let numero = gerarNumero();

    return numero;
}

export const armazenarBola = ()=> {
}

export const verificarLetra = ()=>{
}

export const gerarNumero = () => {
    return Math.floor(Math.random() * (75 - 1 + 1)) + 1;
}
