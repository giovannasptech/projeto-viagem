const flags = [
    { country: "Brasil", image: "https://flagcdn.com/w320/br.png" },
    { country: "França", image: "https://flagcdn.com/w320/fr.png" },
    { country: "Japão", image: "https://flagcdn.com/w320/jp.png" },
    { country: "Itália", image: "https://flagcdn.com/w320/it.png" },
    { country: "Canadá", image: "https://flagcdn.com/w320/ca.png" },
    { country: "Alemanha", image: "https://flagcdn.com/w320/de.png" }
  ];

  let current = 0;

  function showFlag() {
    const flagDiv = document.getElementById("flag");
    flagDiv.style.backgroundImage = `url('${flags[current].image}')`;
    document.getElementById("result").textContent = "";
    document.getElementById("guess").value = "";
    document.getElementById("guess").focus();
  }

  function checkAnswer() {
    const guess = document.getElementById("guess").value.trim().toLowerCase();
    const correct = flags[current].country.toLowerCase();

    const result = document.getElementById("result");
    if (!guess) {
      result.textContent = "Por favor, digite um palpite.";
      result.style.color = "orange";
      return;
    }

    if (guess === correct) {
      result.textContent = "✔️ Acertou! 🎉";
      result.style.color = "green";
    } else {
      result.textContent = `❌ Errou! É ${flags[current].country}.`;
      result.style.color = "red";
    }
  }

  function nextFlag() {
    current = (current + 1) % flags.length;
    showFlag();
  }

  showFlag();