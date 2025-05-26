const quizData = [
    {
      question: "Qual é a capital da França?",
      options: ["Paris", "Lyon", "Marseille", "Toulouse"],
      answer: "Paris"
    },
    {
      question: "Qual país é conhecido pela Torre de Pisa?",
      options: ["Espanha", "Itália", "Grécia", "Portugal"],
      answer: "Itália"
    },
    {
      question: "Qual país tem a maior floresta tropical do mundo?",
      options: ["Indonésia", "Brasil", "Congo", "Peru"],
      answer: "Brasil"
    },
    {
      question: "Qual desses é um país da América do Norte?",
      options: ["Brasil", "México", "Argentina", "Chile"],
      answer: "México"
    },
    {
      question: "Qual é a moeda oficial do Japão?",
      options: ["Yen", "Won", "Dólar", "Euro"],
      answer: "Yen"
    },
    {
      question: "Qual país abriga o Cristo Redentor?",
      options: ["México", "Brasil", "Argentina", "Peru"],
      answer: "Brasil"
    },
    {
        question: "Qual país tem mais ilhas em seu território?",
        options: ["Indonésia", "Noruega", "Suécia", "Filipinas"],
        answer: "Suécia"
      },
      {
        question: "Em que país está localizado o Monte Kilimanjaro?",
        options: ["Quênia", "Tanzânia", "África do Sul", "Etiópia"],
        answer: "Tanzânia"
      },
      {
        question: "Em qual país foi inventado o papel?",
        options: ["Egito", "Grécia", "China", "Índia"],
        answer: "China"
      },
      {
        question: "Qual é o país com mais fusos horários?",
        options: ["França", "Rússia", "China", "Canadá"],
        answer: "França"
      },
      {
        question: "Qual país é conhecido como “Terra do Sol Nascente?",
        options: ["Japão", "Vietnã", "China", "Canadá"],
        answer: "Japão"
      },
      {
        question: " Qual desses países é considerado o mais feliz do mundo?",
        options: ["Suécia", "Finlândia", "Austrália", "Canadá"],
        answer: "Finlândia"
      }
  ];

  let currentQuestion = 0;
  let score = 0;
  let selectedOption = null;

  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const resultEl = document.getElementById('result');
  const submitBtn = document.getElementById('submit-btn');

  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    resultEl.textContent = "";

    q.options.forEach(option => {
      const div = document.createElement('div');
      div.classList.add('option');
      div.textContent = option;
      div.onclick = () => {
        document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
        div.classList.add('selected');
        selectedOption = option;
      };
      optionsEl.appendChild(div);
    });
  }

  submitBtn.onclick = () => {
    if (!selectedOption) {
      resultEl.textContent = "Selecione uma opção.";
      resultEl.style.color = "orange";
      return;
    }

    const correctAnswer = quizData[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      resultEl.textContent = "✔️ Resposta correta!";
      resultEl.style.color = "green";
      score++;
    } else {
      resultEl.textContent = `❌ Errado! A resposta correta é: ${correctAnswer}`;
      resultEl.style.color = "red";
    }

    // Espera 1.5s para carregar próxima pergunta
    setTimeout(() => {
      currentQuestion++;
      selectedOption = null;

      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showFinalScore();
      }
    }, 1500);
  };

  function showFinalScore() {
    questionEl.textContent = "Quiz finalizado!";
    optionsEl.innerHTML = "";
    submitBtn.style.display = "none";
    resultEl.style.color = "#4a148c";
    resultEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
  }

  // Inicializar o quiz
  loadQuestion();