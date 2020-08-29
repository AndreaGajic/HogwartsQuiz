//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var gryffindorScore = 0;
var slytherinScore = 0;
var hufflepuffScore = 0;
var ravenclawScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");

document.getElementById("ravenclaw").style.display = "none";
document.getElementById("gryffindor").style.display = "none";
document.getElementById("hufflepuff").style.display = "none";
document.getElementById("slytherin").style.display = "none";

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", slytherin);
q1a2.addEventListener("click", gryffindor);
q1a3.addEventListener("click", hufflepuff);
q1a4.addEventListener("click", ravenclaw);

q2a1.addEventListener("click", ravenclaw);
q2a2.addEventListener("click", gryffindor);
q2a3.addEventListener("click", slytherin);
q2a4.addEventListener("click", hufflepuff);

q3a1.addEventListener("click", slytherin);
q3a2.addEventListener("click", hufflepuff);
q3a3.addEventListener("click", gryffindor);
q3a4.addEventListener("click", ravenclaw);

q4a1.addEventListener("click", ravenclaw);
q4a2.addEventListener("click", slytherin);
q4a3.addEventListener("click", hufflepuff);
q4a4.addEventListener("click", gryffindor);

//#TODO: Define quiz functions here
function gryffindor() {
  gryffindorScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function slytherin() {
  slytherinScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function hufflepuff() {
  hufflepuffScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function ravenclaw() {
  ravenclawScore += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult() {
  if (gryffindorScore >= 3) {
    result.innerHTML = "Gryffindor!";
    document.getElementById("gryffindor").style.display = "block";
  } else if (slytherinScore >= 3) {
    result.innerHTML = "Slytherin!";
    document.getElementById("slytherin").style.display = "block";
  } else if (hufflepuffScore >= 3) {
    result.innerHTML = "Hufflepuff!";
    document.getElementById("hufflepuff").style.display = "block";
  } else if (ravenclawScore >= 3) {
    result.innerHTML = "Ravenclaw!";
    document.getElementById("ravenclaw").style.display = "block";
  } else {
    result.innerHTML = "Hmmm.. I'm not sure";
  }
}

var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

function restartQuiz() {
  result.innerHTML = "Your Hogwarts house is...";
  questionCount = 0;
  gryffindorScore = 0;
  slytherinScore = 0;
  hufflepuffScore = 0;
  ravenclawScore = 0;
  document.getElementById("ravenclaw").style.display = "none";
  document.getElementById("gryffindor").style.display = "none";
  document.getElementById("hufflepuff").style.display = "none";
  document.getElementById("slytherin").style.display = "none";
}
