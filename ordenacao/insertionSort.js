const livros = require ('./listaLivros');

function insertionSort(lista) {
    for (atual = 0; atual < lista.length; atual++) {
       let analise = atual;

       while(analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
        let itemAnalise = lista [analise];
        let itemAterior = lista[analise -1]; 

        lista[analise] = itemAterior
        livros[menor] = itemAnalise

        analise--
       }
    }
    console.log(lista);

}

insertionSort(livros);