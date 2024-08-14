function converter() {
  // Obter valores dos campos de entrada
  const valor = parseFloat(document.getElementById('valorInput').value);
  const unidadeEntrada = document.getElementById('unidadeEntrada').value;
  const unidadeSaida = document.getElementById('unidadeSaida').value;

  // Definir as taxas de convers�o
  const taxasConversao = {
    "litro": {
      "mililitro": 1000,
      "gal�o": 0.264172,
      "polegada c�bica": 61.0234
    },
    "mililitro": {
      "litro": 0.001,
      "gal�o": 0.000264172,
      "polegada c�bica": 0.0610234
    },
    "gal�o": {
      "litro": 3.78541,
      "mililitro": 3785.41,
      "polegada c�bica": 231
    },
    "polegada c�bica": {
      "litro": 0.0163871,
      "mililitro": 16.3871,
      "gal�o": 0.004329
    }
  };

  // Validar se as unidades existem nas taxas de convers�o
  if (!taxasConversao[unidadeEntrada] || !taxasConversao[unidadeEntrada][unidadeSaida]) {
    alert("As unidades selecionadas n�o s�o v�lidas para convers�o.");
    return;
  }

  // Calcular o valor convertido
  const taxaConversao = taxasConversao[unidadeEntrada][unidadeSaida];
  const valorConvertido = valor * taxaConversao;

  // Exibir o resultado
  document.getElementById('resultado').textContent = `${valor} ${unidadeEntrada} equivale a ${valorConvertido.toFixed(3)} ${unidadeSaida}`;
}
