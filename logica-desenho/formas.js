function desenhaQuadradoVerde() {

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'green';
    pincel.fillRect(0, 0, 50, 50);
    pincel.strokeStyle = 'black';
    pincel.strokeRect(0, 0, 50, 50);

}

desenhaQuadradoVerde();
desenhaQuadradoVerde();
desenhaQuadradoVerde();