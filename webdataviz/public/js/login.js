function entrar() {
    aguardar();

    var emailVar = email_input.value.trim();
    var senhaVar = senha_input.value.trim();

    if (emailVar === "" || senhaVar === "") {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML = "Por favor, preencha todos os campos.";
      finalizarAguardar();
      return false;
    } else {
      setTimeout(sumirMensagem, 5000);
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar
      })
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      if (resposta.ok) {
        resposta.json().then(json => {
          console.log(json);
          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.id;
         
          setTimeout(function () {
            window.location = "./dashboard/cards.html";
          }, 1000);
        });

      } else {
        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then(texto => {
          console.error(texto);
          finalizarAguardar(texto);
        });
      }

    }).catch(function (erro) {
      console.error("Erro na requisição de login:", erro);
      finalizarAguardar("Erro inesperado no login.");
    });

    return false;
  }

  function sumirMensagem() {
    cardErro.style.display = "none";
  }

  function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}


function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}