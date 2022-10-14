const titleElement = document.getElementById('title');
const choicesElement = document.getElementById('choices');
const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');

const questions = [{ //sample question
  title: 'Where do you save your repositories?',
  choices: ['Github', 'Your PC', 'Stack Overflow', 'Megaupload'],
  correctAnswer: 0
}, {
  title: 'question 2',
  choices: ['Wrong', 'wrong2', 'wrong3', 'correct'],
  correctAnswer: 3
}];

function startQuiz() {
  startBtn.classList.add("hidden");
  var timeRemaining = 15;
  var quizTimer = setInterval(function () {
    timeRemaining--;
    console.log(timeRemaining);

    if (timeRemaining === 0) {
      console.log("time over");
      clearInterval(quizTimer);
    }
  }, 1000)
  console.log('Clicked!');
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    console.log(question.title)
    choicesElement.textContent = "";
    titleElement.textContent = question.title;
    for (let answers = 0; answers < question.choices.length; answers++) {
      const possibleAnswer = question.choices[answers];
      const answerElement = document.createElement("li");
      answerElement.textContent = possibleAnswer;
      choicesElement.append(answerElement);
      console.log(possibleAnswer)
    }
  }

}

startBtn.addEventListener('click', startQuiz);

