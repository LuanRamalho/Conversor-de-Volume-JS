function converter() {
  // Obter valores dos campos de entrada
  const valor = parseFloat(document.getElementById('valorInput').value);
  const unidadeEntrada = document.getElementById('unidadeEntrada').value;
  const unidadeSaida = document.getElementById('unidadeSaida').value;

  // Definir as taxas de conversão
  const taxasConversao = {
    "litro": {
      "mililitro": 1000,
      "galão": 0.264172,
      "polegada cúbica": 61.0234
    },
    "mililitro": {
      "litro": 0.001,
      "galão": 0.000264172,
      "polegada cúbica": 0.0610234
    },
    "galão": {
      "litro": 3.78541,
      "mililitro": 3785.41,
      "polegada cúbica": 231
    },
    "polegada cúbica": {
      "litro": 0.0163871,
      "mililitro": 16.3871,
      "galão": 0.004329
    }
  };

  // Validar se as unidades existem nas taxas de conversão
  if (!taxasConversao[unidadeEntrada] || !taxasConversao[unidadeEntrada][unidadeSaida]) {
    alert("As unidades selecionadas não são válidas para conversão.");
    return;
  }

  // Calcular o valor convertido
  const taxaConversao = taxasConversao[unidadeEntrada][unidadeSaida];
  const valorConvertido = valor * taxaConversao;

  // Exibir o resultado
  document.getElementById('resultado').textContent = `${valor} ${unidadeEntrada} equivale a ${valorConvertido.toFixed(3)} ${unidadeSaida}`;
}
