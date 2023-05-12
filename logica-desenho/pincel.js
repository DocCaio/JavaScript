let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0 , 0 , 600 ,400);

function exibeAlerta() {
    alert('Cliquei')
}
