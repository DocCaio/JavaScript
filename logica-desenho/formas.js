function desenhaQuadrado(x, y, cor) {

    let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);
    pincel.strokeStyle = 'black';
    pincel.strokeRect(x, y, 50, 50);

}



/*
var x = 0;

while(x < 600) {

    desenhaQuadrado(x, 0, 'green');
x = x + 50;
}
*/
for(var x = 0; x < 600; x = x + 50) {
desenhaQuadrado(x, 0, 'green');
}