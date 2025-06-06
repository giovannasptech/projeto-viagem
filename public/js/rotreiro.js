let respostas = {};

function responder(pergunta, resposta) {
  respostas[pergunta] = resposta;
  document.getElementById(pergunta).style.display = "none";

  if (pergunta === 'q1') {
    document.getElementById('q2').style.display = "block";
  } else if (pergunta === 'q2') {
    document.getElementById('q3').style.display = "block";
  } else if (pergunta === 'q3') {
    mostrarRoteiro();
  }
}

function mostrarRoteiro() {
  document.getElementById('quiz').style.display = "none";
  document.getElementById('resultado').style.display = "block";

  const roteiros = {
    aventureiro: ["Chile", "México", "Estados Unidos"],
    cultura: ["Argentina", "Brasil", "Paraguai"],
    relax: ["Uruguai", "Brasil", "México"],
    comida: ["México", "Argentina", "Brasil"],
    música: ["Paraguai", "Brasil", "Uruguai"],
    paisagem: ["Chile", "Estados Unidos", "Argentina"]
  };

  let estilo = respostas.q2 || 'aventura';
  if (respostas.q3 === 'comida') estilo = 'comida';
  else if (respostas.q3 === 'música') estilo = 'música';
  else if (respostas.q3 === 'paisagem') estilo = 'paisagem';

  const destinos = roteiros[estilo];
  const ul = document.getElementById('destinos');
  ul.innerHTML = ""; 

  destinos.forEach(destino => {
    const li = document.createElement('li');
    li.textContent = `🌎 ${destino}`;
    ul.appendChild(li);
  });

  const mascoteURL = {
    aventura: "https://i.imgur.com/0DElr0H.png",
    cultura: "https://i.imgur.com/8w5fQRQ.png",
    relax: "https://i.imgur.com/TcwMP6Z.png",
    comida: "https://i.imgur.com/IJjUGTf.png",
    música: "https://i.imgur.com/jV7iW3z.png",
    paisagem: "https://i.imgur.com/RK4z09u.png"
  };

  document.getElementById('mascote').src = mascoteURL[estilo];
}