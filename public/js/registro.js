var paisesVisitados = [];
    var TOTAL_PAISES = 195;

    function adicionarPais() {
      var input = document.getElementById('inputPais');
      var nomePais = input.value.trim();

      if (nomePais === '') {
        alert('Digite o nome de um país válido!');
        return;
      }

      if (paisesVisitados.includes(nomePais.toLowerCase())) {
        alert('Você já adicionou esse país!');
        input.value = '';
        return;
      }

      paisesVisitados.push(nomePais.toLowerCase());

      var lista = document.getElementById('listaPaises');
      var item = document.createElement('li');
      item.textContent = nomePais;
      lista.appendChild(item);

      input.value = '';

      atualizarRelatorio();
    }

    function atualizarRelatorio() {
      var total = paisesVisitados.length;
      var porcentagem = ((total / TOTAL_PAISES) * 100).toFixed(2);

      document.getElementById('totalVisitados').textContent = total;
      document.getElementById('porcentagemMundo').textContent = porcentagem;
      document.getElementById('resultado').style.display = 'block';
    }