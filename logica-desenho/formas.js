function desenhaQuadradoVerde(x , y) {

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'green';
    pincel.fillRect(x, y, 50, 50);
    pincel.strokeStyle = 'black';
    pincel.strokeRect(x, y, 50, 50);

}

desenhaQuadradoVerde();
desenhaQuadradoVerde();
desenhaQuadradoVerde();