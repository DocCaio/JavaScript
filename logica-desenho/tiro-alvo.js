var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);

}

desenhaCirculo(100, 100, 10, 'red');
desenhaCirculo(100, 100, 30, 'white');
desenhaCirculo(100, 100, 40, 'red');