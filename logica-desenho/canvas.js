let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

pincel.fillStyle = "lightGrey";
pincel.fillRect(0 ,0,600 , 400);

pincel.fillStyle = "green";
pincel.fillRect(0 , 0 , 200 , 400);

pincel.fillStyle = "red";
pincel.fillRect(400 , 0 , 200 , 400 )