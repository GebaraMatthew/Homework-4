let question = { //sample question
    title: 'Where do you save your repositories?',
    alternatives: ['Github', 'Your PC', 'Stack Overflow', 'Megaupload'],
    correctAnswer: 1
  };

function showQuestion(q){

}

showQuestion(question);

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  console.log('Clicked!');
});

var countDown = 15;
function timer() {
  var interval = setInterval(function() {
    secondsleft--;
    DocumentTimeline.textcontent = secondsleft + " seconds left.";

    if(secondsleft === 0) {
      failstate = true;
    }
  }
}