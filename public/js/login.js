function entrar() {
  var emailVar = email_input.value;
  var senhaVar = senha_input.value;

  if (emailVar == "" || senhaVar == "") {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
      finalizarAguardar();
      return false;
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
      console.log("ESTOU NO THEN DO login()!");

      if (resposta.ok) {
          resposta.json().then(json => {
              console.log(json);
              console.log(JSON.stringify(json));

              // Salvando no sessionStorage
              sessionStorage.setItem("EMAIL_USUARIO", json.email);
              sessionStorage.setItem("NOME_USUARIO", json.nome);
              sessionStorage.setItem("ID_USUARIO", json.idUsuario);

              // Redirecionando para a página logada
              window.location = "/pagina-jogos.html";
          });

      } else {
          alert("Login inválido. Tente novamente!");
          console.log("Houve um erro ao tentar realizar o login!");

          resposta.text().then(texto => {
              console.error(texto);
          });
      }
  });
}

