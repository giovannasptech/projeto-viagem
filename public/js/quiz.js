const listaDeQuestoes = [

  {
 pergunta: "Qual é a capital da França?",
 alternativaA: "Paris",
 alternativaB: "Lyon", 
 alternativaC: "Marseille", 
 alternativaD: "Toulouse",
 alternativaCorreta: "alternativaA"
},
{
 pergunta: "Qual país é conhecido pela Torre de Pisa?",
 alternativaA: "Espanha",
 alternativaB: "Itália",
 alternativaC: "Grécia",
 alternativaD: "Portugal",
 alternativaCorreta: "alternativaB"
},
{
 pergunta: "Qual país tem a maior floresta tropical do mundo?",
 alternativaA: "Indonésia",
 alternativaB: "Brasil",
 alternativaC: "Congo",
 alternativaD: "Peru",
 alternativaCorreta: "alternativaB"
},
{
 pergunta: "Qual desses é um país da América do Norte?",
 alternativaA: "Brasil",
 alternativaB: "México", 
 alternativaC: "Argentina", 
 alternativaC: "Chile",
 alternativaCorreta: "alternativaB"
},
{
 pergunta: "Qual é a moeda oficial do Japão?",
 alternativaA: "Yen", 
 alternativaB: "Won", 
 alternativaC: "Dólar",
 alternativaD: "Euro",
 alternativaCorreta: "alternativaA"
},
{
 pergunta: "Qual país abriga o Cristo Redentor?",
 alternativaA: "México", 
 alternativaB: "Brasil", 
 alternativaC: "Argentina",
 alternativaD: "Peru",
 alternativaCorreta: "alternativaB"
},
{
   pergunta: "Qual país tem mais ilhas em seu território?",
   alternativaA: "Indonésia", 
   alternativaB: "Noruega", 
   alternativaC: "Suécia",
   alternativaD: "Filipinas",
   alternativaCorreta: "alternativaC"
 },
 {
   pergunta: "Em que país está localizado o Monte Kilimanjaro?",
   alternativaA: "Quênia", 
   alternativaB: "Tanzânia", 
   alternativaC: "África do Sul", 
   alternativaD:"Etiópia",
   alternativaCorreta: "alternativaB"
 },
 {
   pergunta: "Em qual país foi inventado o papel?",
   alternativaA: "Egito",
   alternativaB: "Grécia",
   alternativaC: "China",
   alternativaD: "Índia",
   alternativaCorreta: "alternativaC"
 },
 {
   pergunta: "Qual é o país com mais fusos horários?",
   alternativaA: "França",
   alternativaB: "Rússia",
   alternativaC: "China",
   alternativaD: "Canadá",
   alternativaCorreta: "alternativaA"
 },
 {
   pergunta: "Qual país é conhecido como “Terra do Sol Nascente?",
   alternativaA: "Japão", 
   alternativaB: "Vietnã",
   alternativaC: "China",
   alternativaD: "Canadá",
   alternativaCorreta: "alternativaA"
 },
 {
   pergunta: " Qual desses países é considerado o mais feliz do mundo?",
   alternativaA: "Suécia", 
   alternativaB: "Finlândia",
   alternativaC: "Austrália", 
   alternativaD: "Canadá",
   alternativaCorreta: "alternativaB"
 }

]

// variáveis globais    
let numeroDaQuestaoAtual = 0
let pontuacaoFinal = 0
let tentativaIncorreta = 0
let certas = 0
let erradas = 0
let quantidadeDeQuestoes = listaDeQuestoes.length
// let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

function onloadEsconder() {
   document.getElementById('pontuacao').style.display = "none"
   document.getElementById('jogo').style.display = "none"
}

function iniciarQuiz() {
   document.getElementById('pontuacao').style.display = "flex"
   document.getElementById('jogo').style.display = "flex"
   document.getElementById('btnIniciarQuiz').style.display = "none"

   document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

   preencherHTMLcomQuestaoAtual(0)

   btnSubmeter.disabled = false
   btnProx.disabled = true
   // btnConcluir.disabled = true
   btnTentarNovamente.disabled = true
}

function preencherHTMLcomQuestaoAtual(index) {
   habilitarAlternativas(true)
   const questaoAtual = listaDeQuestoes[index]
   numeroDaQuestaoAtual = index
   console.log("questaoAtual")
   console.log(questaoAtual)
   document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
   document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
   document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
   document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
   document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
   document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
}

function submeter() {
   const options = document.getElementsByName("option"); // recupera alternativas no html

   let hasChecked = false
   for (let i = 0; i < options.length; i++) {
       if (options[i].checked) {
           hasChecked = true
           break
       }
   }

   if (!hasChecked) {
       alert("Não há alternativas escolhidas. Escolha uma opção.")
   } else {
       btnSubmeter.disabled = true
       btnProx.disabled = false

       habilitarAlternativas(false)

       checarResposta()
   }
}

function habilitarAlternativas(trueOrFalse) {
   let opcaoEscolhida = trueOrFalse ? false : true

   primeiraOpcao.disabled = opcaoEscolhida
   segundaOpcao.disabled = opcaoEscolhida
   terceiraOpcao.disabled = opcaoEscolhida
   quartaOpcao.disabled = opcaoEscolhida

}

function avancar() {
   btnProx.disabled = true
   btnSubmeter.disabled = false

   desmarcarRadioButtons()

   if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
       preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
   } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
       alert("Atenção... a próxima é a ultima questão!")
       preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
   } else {
       finalizarJogo()
   }
   limparCoresBackgroundOpcoes()
}

function tentarNovamente() {
   // atualiza a página
   window.location.reload()
}

function checarResposta() {
   const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
   const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

   const options = document.getElementsByName("option"); // recupera alternativas no html

   let alternativaCorreta = null // variável para armazenar a alternativa correta

   options.forEach((option) => {
       if (option.value === respostaQuestaoAtual) {
           console.log("alternativaCorreta está no componente: " + alternativaCorreta)
           alternativaCorreta = option.labels[0].id
       }
   })

   // verifica se resposta assinalada é correta
   options.forEach((option) => {
       if (option.checked === true && option.value === respostaQuestaoAtual) {
           document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
           pontuacaoFinal++
           certas++
           document.getElementById("spanCertas").innerHTML = certas
           numeroDaQuestaoAtual++
       } else if (option.checked && option.value !== respostaQuestaoAtual) {
           const wrongLabelId = option.labels[0].id

           document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
           document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
           tentativaIncorreta++
           erradas++
           document.getElementById("spanErradas").innerHTML = erradas
           numeroDaQuestaoAtual++
       }
   })
}

function limparCoresBackgroundOpcoes() {
   const options = document.getElementsByName("option");
   options.forEach((option) => {
       document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
       document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
   })
}

function desmarcarRadioButtons() {
   const options = document.getElementsByName("option");
   for (let i = 0; i < options.length; i++) {
       options[i].checked = false;
   }
}

function finalizarJogo() {
   let textoParaMensagemFinal = null
   let classComCoresParaMensagemFinal = null
   const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

   if (porcentagemFinalDeAcertos <= 0.3) {
       textoParaMensagemFinal = "Parece que você não estudou..."
       classComCoresParaMensagemFinal = "text-danger-with-bg"
   }
   else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
       textoParaMensagemFinal = "Pode melhorar na próxima, hein!"
       classComCoresParaMensagemFinal = "text-warning-with-bg"
   }
   else if (porcentagemFinalDeAcertos >= 0.9) {
       textoParaMensagemFinal = "Uau, parabéns!"
       classComCoresParaMensagemFinal = "text-success-with-bg"
   }

   textoParaMensagemFinal += "<br> Você acertou " + Math.round((porcentagemFinalDeAcertos)*100) + "% das questões."


   document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
   document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal) 
   document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

   document.getElementById('jogo').classList.add("text-new-gray") 

   btnProx.disabled = true
   btnSubmeter.disabled = true
   // btnConcluir.disabled = true
   btnTentarNovamente.disabled = false

   sessionStorage.setItem("acertos", pontuacaoFinal);
   sessionStorage.setItem("erros", erradas);

   quiz_inserir();



}

function quiz_inserir() {
  var corretaVar = pontuacaoFinal;
  var erradaVar = erradas;
  var fkUsuarioVar = sessionStorage.getItem("ID_USUARIO");

  fetch("/usuarios/quiz_inserido", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          corretaServer: corretaVar,
          erradoServer: erradaVar,
          fk_usuarioServer: fk_usuarioVar,
      }),
  })
  .then(function (resposta) {
      console.log("resposta: ", resposta);
  })
  .catch(function (error) {
      console.log("Erro ao enviar os dados: ", error);
      alert("Erro ao enviar os dados.");
  });
}