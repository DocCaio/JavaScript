//Faça uma função que aceite vários arrays como argumentos e retorne um único array 
//contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

function concatArrays(...arrays) {
    return [].concat(...arrays); // operador spread para concatenar os arrays
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const arraysConcatenados = concatArrays(arr1, arr2, arr3);
console.log(arraysConcatenados); // Saída: [1, 2, 3, 4, 5, 6]


