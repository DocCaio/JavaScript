



    function pulaLinha() {

        document.write("<br>");
        document.write("<br>");

}

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
}

var pesoFlavio = 73;
var alturaFlavio = 1.71;

var imcFlavio = pesoFlavio / (alturaFlavio * alturaFlavio);

mostra("O imc do Flávio é " + imcFlavio);
