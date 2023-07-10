const listaLivros = require('./array');

function mergeSort(array) {
    if(array.lenght > 1) {
        const meio = Math.floor (array.lenght / 2);
        const parte1 = mergeSort (array.slice(0, meio));        
        const parte2 = mergeSort(array.slice(meio, array.lenght));
        array = ordena(parte1, parte2);
    }
}

function ordena(parte1, parte2) {
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.lenght && posicaoAtualLista2 < parte2.lenght) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1)
            produtoAtualParte1++
        } else {
            resultado.push(produtoAtualParte2)
            posicaoAtualLista2++
        }
    }

}

console.log(mergeSort(listaLivros));