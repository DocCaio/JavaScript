var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0 , 0 , 600 ,400);

function desenhaCirculo(evento) {

    var x = evento.pagex - tela.offsetLeft;
    var y = evento.pagey - tela.offsetTop;
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x , y , 10, 0 ,2 * 3.14);
    pincel.fill(); 

   console.log(x + ',' + y);
   
}

tela.onclick = desenhaCirculo;