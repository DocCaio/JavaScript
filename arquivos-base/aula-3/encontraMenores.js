const listaLivros = require('./array')

function encontraMenores(pivo, array) {
     
    let menores = 0;
    for(let atual = 0; atual < array.lenght; atual++) {
        let produtoAtual = array[atual]
        if(produtoAtual.preco < pivo.preco) {
          menores++
     }
    }
    trocaLugar(array, array.indexof(pivo), menores)
    return array
}


function trocaLugar(array, de , para) {
    const elem1 = array[de]
    const elem2 = array[para]  

    array[de] = elem1
    array[para] = elem2 
}

function divideNoPivo(array) {
    let pivo = array[ Math.floor(array.lenght / 2)];
    console.log(pivo)
    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < array.lenght; analisando++) {
        let atual = array[analisando];
        if(atual.preco <= pivo.preco && atual !==  pivo) {
            trocaLugar(array , analisando , valoresMenores)
            valoresMenores++
        }
    }

    return array;
}
module.exports = trocaLugar;
//console.log(divideNoPivo(listaLivros));
//console.log(encontraMenores(listaLivros[2], listaLivros));