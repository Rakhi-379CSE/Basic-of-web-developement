const quizData = [
  {
    question: "Which CSS property enables 3D transformations?",
    options: ["transform-style", "box-shadow", "z-index", "font-stretch"],
    correct: 0
  },
  {
    question: "Which method fetches data from APIs in JavaScript?",
    options: ["getData()", "fetch()", "loadAPI()", "callData()"],
    correct: 1
  }
];

const quizContainer = document.getElementById("quiz");
let quizIndex = 0;

function loadQuiz() {
  if (quizIndex >= quizData.length) {
    quizContainer.innerHTML = "<div class='quiz-feedback'>🎉 Quiz Complete!</div>";
    return;
  }

  const q = quizData[quizIndex];
  let html = <div class='quiz-q'>${q.question}</div>;
  q.options.forEach((opt, i) => {
    html += <button class='quiz-btn' onclick='selectQuizOption(${i})'>${opt}</button>;
  });
  quizContainer.innerHTML = html;
}

window.selectQuizOption = function(selected) {
  const correct = quizData[quizIndex].correct;
  const feedback = selected === correct
    ? "<div class='quiz-feedback'>✅ Correct!</div>"
    : "<div class='quiz-feedback' style='background:#e65e63;'>❌ Incorrect!</div>";

  quizContainer.innerHTML += feedback;

  setTimeout(() => {
    quizIndex++;
    loadQuiz();
  }, 800);
};

loadQuiz();

const fetchBtn = document.getElementById("fetchBtn");
const jokeResult = document.getElementById("jokeResult");

fetchBtn.addEventListener("click", async () => {
  jokeResult.textContent = "Loading...";
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    jokeResult.textContent = ${data.setup} — ${data.punchline};
  } catch (error) {
    jokeResult.textContent = "⚠ Failed to load joke.";
  }
});