const roteiros = {
  aventura: {
    nome: "Nova Zelândia",
    imagem: "https://th.bing.com/th/id/R.454d343e9490d6424d231ca32974a7f2?rik=EvZ91rvpc9Jr%2fg&pid=ImgRaw&r=0",
    dias: [
      "Dia 1: Trilha em Tongariro",
      "Dia 2: Bungee jump em Queenstown",
      "Dia 3: Rafting em Rotorua"
    ]
  },
  cultura: {
    nome: "Itália",
    imagem: "https://th.bing.com/th/id/R.9db5ab78bbcd472e95d9fd6ea5a067cf?rik=Vw8PdccgHriOIg&pid=ImgRaw&r=0",
    dias: [
      "Dia 1: Coliseu em Roma",
      "Dia 2: Galeria Uffizi em Florença",
      "Dia 3: Tour histórico em Veneza"
    ]
  },
  romance: {
    nome: "França",
    imagem: "https://th.bing.com/th/id/OIP.BLxbAVykNqEK2XHxeZTzhgHaE8?rs=1&pid=ImgDetMain",
    dias: [
      "Dia 1: Torre Eiffel e jantar romântico",
      "Dia 2: Passeio pelo Sena",
      "Dia 3: Castelo de Versailles"
    ]
  },
  natureza: {
    nome: "Costa Rica",
    imagem: "https://th.bing.com/th/id/OIP.V17kR0N3dI80ucEx86oW6wHaEv?w=750&h=480&rs=1&pid=ImgDetMain",
    dias: [
      "Dia 1: Trilhas em Monteverde",
      "Dia 2: Catarata La Fortuna",
      "Dia 3: Vulcão Arenal e águas termais"
    ]
  },
  familia: {
    nome: "Canadá",
    imagem: "https://cdn.generationvoyage.fr/2021/11/canada.jpg",
    dias: [
      "Dia 1: Passeio na CN Tower - Toronto",
      "Dia 2: Niágara Falls e parque aquático",
      "Dia 3: Explorando museus interativos"
    ]
  }
};

document.querySelectorAll('.option').forEach(botao => {
  botao.addEventListener('click', () => {
    const estilo = botao.getAttribute('data-style');
    const destino = roteiros[estilo];

    document.getElementById('imagemDestino').src = destino.imagem;
    document.getElementById('nomeDestino').textContent = destino.nome;

    const lista = document.getElementById('roteiroDias');
    lista.innerHTML = '';
    destino.dias.forEach(dia => {
      const item = document.createElement('li');
      item.textContent = dia;
      lista.appendChild(item);
    });

    document.getElementById('resultado').classList.remove('hidden');

    // Armazenar localmente para salvar depois
    localStorage.setItem('roteiroSelecionado', JSON.stringify(destino));
  });
});

document.getElementById('salvarBtn').addEventListener('click', () => {
  alert("Roteiro salvo com sucesso! Você pode acessar novamente ao voltar nesta página.");
});