const bandeiras = [
    { nome: "Brasil", img: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" },
    { nome: "Japão", img: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
    { nome: "França", img: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { nome: "Egito", img: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" },
    { nome: "Canadá", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg" },
    { nome: "Itália", img: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" },
    { nome: "Alemanha", img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" },
    { nome: "Argentina", img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
    { nome: "Austrália", img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg" },
    { nome: "África do Sul", img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" }
  ];

  
  let albumColecionado = new Set();

  const albumDiv = document.getElementById('album');
  const mensagem = document.getElementById('mensagem');
  const btnReceber = document.getElementById('receber');

 
  function criarSlots() {
    albumDiv.innerHTML = '';
    bandeiras.forEach(bandeira => {
      const slot = document.createElement('div');
      slot.className = 'slot';
      slot.id = 'slot-' + bandeira.nome;

      const img = document.createElement('img');
      img.src = bandeira.img;
      img.alt = bandeira.nome;
      slot.appendChild(img);

      if (albumColecionado.has(bandeira.nome)) {
        slot.classList.add('collected');
      } else {
        slot.style.filter = 'grayscale(90%) brightness(130%)';
        img.style.opacity = 0.3;
      }

      albumDiv.appendChild(slot);
    });
  }

  btnReceber.addEventListener('click', () => {
    const cartasAMais = Math.floor(Math.random() * 3) + 1; 
    let novasFigurinhas = [];

    for (let i = 0; i < cartasAMais; i++) {
      const sorteada = bandeiras[Math.floor(Math.random() * bandeiras.length)];
      if (!albumColecionado.has(sorteada.nome)) {
        albumColecionado.add(sorteada.nome);
        novasFigurinhas.push(sorteada.nome);
      }
    }

    if (novasFigurinhas.length === 0) {
      mensagem.textContent = "Você já tem todas as figurinhas dessa rodada!";
    } else {
      mensagem.textContent = `Você ganhou ${novasFigurinhas.length} figurinha${novasFigurinhas.length > 1 ? 's' : ''}: ${novasFigurinhas.join(', ')}!`;
    }

    criarSlots();

    if (albumColecionado.size === bandeiras.length) {
      mensagem.textContent = "Parabéns! Você completou o álbum da sua volta ao mundo!";
      btnReceber.disabled = true;
      btnReceber.style.backgroundColor = '#0b5d8c';
      btnReceber.style.cursor = 'default';
    }
  });


  criarSlots();
