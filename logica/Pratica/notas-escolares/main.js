function calcularNota() {
  let linguagens = 800 ;
  let matematica = 900;
  let humanas = 100; 
  let natureza = 400;
  let redacao = 1000;

  let pesoLinguagens = 1;
  let pesoMatematica = 2;
  let pesoHumanas = 1;
  let pesoNatureza = 4;
  let Redacao = 2;

  let notaPonderadaLinguagens = linguagens * pesoLinguagens;
  let notaPonderadaMatematica = matematica * pesoMatematica;
  let notaPonderadaHumanas = humanas * pesoHumanas;
  let notaPonderadaNatureza = natureza * pesoNatureza;
  let notaPonderadaRedacao = redacao * pesoRedacao;

  let notaTotal = (notaPonderadaLinguagens + 
    notaPonderadaMatematica + 
    notaPonderadaHumanas +
    notaPonderadaNatureza +
    notaPonderadaRedacao) / (pesoLinguagens + pesoMatematica + pesoHumanas + pesoNatureza + pesoRedacao);

alert("Sua nota final é " + notaTotal);
}


