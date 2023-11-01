function calcularGasolina() {
  
  // consumo - > km/l
  // preço da gasolina - > R$
  // distancia -> Km

  let consumo = document.querySelectorAll("#consumo").value;
  let preco = document.querySelectorAll("#preco");
  let distancia = document.querySelectorAll("#preco");

  let custoViagem;

  custoViagem = (distancia/consumo)*preco;

  alert("o valor da viagem será de : R$ " + custoViagem.toFixed(2));

}