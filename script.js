function calcular() {
  const altura = parseFloat(document.getElementById("altura").value);
  const distancia = parseFloat(document.getElementById("distancia").value);
  const inclinacao = parseFloat(document.getElementById("inclinacao").value);
  const camada = parseFloat(document.getElementById("camada").value);
  const sobra = parseFloat(document.getElementById("sobra").value);

  if (isNaN(altura) || isNaN(distancia) || isNaN(inclinacao) || isNaN(camada) || isNaN(sobra)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  // Nova altura projetada
  const novaAltura = altura - camada;

  // Novo afastamento (baseado na inclinação)
  // Exemplo: 50% → 0.5 → distância = altura / 0.5
  const novoAfastamento = novaAltura / (inclinacao / 100);

  // Distância considerando a sobra da estaca
  const distanciaFinal = novoAfastamento + sobra;

  document.getElementById("novaAltura").textContent = novaAltura.toFixed(3);
  document.getElementById("novoAfastamento").textContent = novoAfastamento.toFixed(3);
  document.getElementById("distanciaFinal").textContent = distanciaFinal.toFixed(3);
}
