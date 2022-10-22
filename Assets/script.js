const titleElement = document.getElementById('title');
const choicesElement = document.getElementById('choices');
const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
let currentQuestionIndex = 0;
let timeRemaining = 15; //sets the timer to 15 seconds

const questions = [{ //question list
  title: 'Where do you save your repositories?',
  choices: ['Github', 'Your PC', 'Stack Overflow', 'Megaupload'],
  correctAnswer: 0
}, {
  title: 'question 2',
  choices: ['Wrong', 'wrong2', 'wrong3', 'correct'],
  correctAnswer: 3
}];

function startQuiz() {
  startBtn.classList.add("hidden"); //hides the start button after pressing it

  var quizTimer = setInterval(function () { //makes the timer count down
    timeRemaining--;
    console.log(timeRemaining);

    if (timeRemaining === 0) { //checks if its zero and then gives the time up.
      console.log("time over");
      clearInterval(quizTimer);
    }
  }, 1000) //makes it go down every second
  console.log('Clicked!');
  // titleElement.textContent = questions[counter].title
  // choicesElement.textContent = questions[counter].choices
  // let option1 = document.createElement("button").classList.add("option");
  // let option2 = document.createElement("button").classList.add("option");
  // let option3 = document.createElement("button").classList.add("option");
  // let option4 = document.createElement("button").classList.add("option");
  // option1.textContent = questions[counter].choices[0];
  // option2.textContent = questions[counter].choices[1];
  // option3.textContent = questions[counter].choices[2];
  // option4.textContent = questions[counter].choices[3];
  // choicesElement.appendChild(option1);
  // choicesElement.appendChild(option2);
  // choicesElement.appendChild(option3);
  // choicesElement.appendChild(option4);

  // for (let i = 0; i < questions.length; i++) { //goes through each question in the list
    console.log(questions[currentQuestionIndex]);
    console.log(questions[currentQuestionIndex].title)
    choicesElement.textContent = ""; //resets the choices after each loop
    titleElement.textContent = questions[currentQuestionIndex].title; //displays the question
    for (let j = 0; j < questions[currentQuestionIndex].choices.length; j++) {
      const possibleAnswer = questions[currentQuestionIndex].choices[j];
      const answerListElement = document.createElement("li");
      const answerButtonElement = document.createElement("button");
      answerButtonElement.textContent = possibleAnswer; //creates a button for each answer
      answerButtonElement.classList.add("answers");
      answerListElement.append(answerButtonElement);
      choicesElement.append(answerListElement);
      console.log(possibleAnswer);
    }
  // }

}

function nextQuestion() {
  console.log("nextQuestion fired")
  currentQuestionIndex++
  choicesElement.textContent = ""; //resets the choices after each loop
  titleElement.textContent = questions[currentQuestionIndex].title
  //choicesElement.textContent = questions[currentQuestionIndex].choices
  for (let j = 0; j < questions[currentQuestionIndex].choices.length; j++) {
    const possibleAnswer = questions[currentQuestionIndex].choices[j];
    const answerListElement = document.createElement("li");
    const answerButtonElement = document.createElement("button");
    answerButtonElement.textContent = possibleAnswer; //creates a button for each answer
    answerButtonElement.classList.add("answers");
    answerListElement.append(answerButtonElement);
    choicesElement.append(answerListElement);
    console.log(possibleAnswer);
  }

}

function handleChoiceClick(event){
console.log("Clicked!")
//console.log(event.target)
if (event.target.className == "answers"){
  console.log("this is an answer button.")
  nextQuestion()
}
}

startBtn.addEventListener('click', startQuiz);
choicesElement.addEventListener('click', handleChoiceClick);



// let choicesElement = document.getElementsByClassName("choices");
// for (let i = 0; i < choicesElement.length; i++) {
//   choicesElement[i].addEventListener("click", nextQuestion)
// }



