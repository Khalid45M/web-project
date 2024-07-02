let question = document.getElementById("question");
let answers = document.querySelectorAll(".answarBtn button");
let answerBox = document.querySelector(".answarBtn");
let nextBtn = document.getElementById("nextBtn");
let questionNum = 0;
let result = 0;

showQuiz();
async function showQuiz() {
  let response = await fetch("json.json");
  let data = await response.json();
  let dataLength = data.length;
  addQuestion(data[questionNum], dataLength);
}

function addQuestion(correntQuestion, numberOfQuestions) {
  if (questionNum < numberOfQuestions) {
    // add question
    question.innerHTML = correntQuestion.question;
    // add answers
    answers[0].innerHTML = correntQuestion.A;
    answers[1].innerHTML = correntQuestion.B;
    answers[2].innerHTML = correntQuestion.C;
    answers[3].innerHTML = correntQuestion.D;
    // when clicked
    answers.forEach((answer) => {
      answer.addEventListener("click", () => {
        answer.classList.add("clicked");
        clicked();
        if (answer.innerHTML == correntQuestion.answer) {
          result++;
        }
      });
    });
  } else {
    answerBox.style.display = "none"
    nextBtn.style.display = "none";
    question.style.fontSize = "25px"
    question.innerHTML = `Result = ${result}`

  }
}

function clicked() {
  answers.forEach((answer) => {
    answer.setAttribute("disabled", "true");
  });
  nextBtn.style.display = "block";
}

function nextQuestion() {
  answers.forEach((answer) => {
    answer.classList.remove("clicked");
    answer.removeAttribute("disabled");
  });
  questionNum++;
  showQuiz();
  nextBtn.style.display = "none";
}
