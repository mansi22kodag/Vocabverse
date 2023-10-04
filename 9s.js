const questions=[
{
question: "1. 'The city never sleeps.' This is an example of:",
options: ["Hyperbole", "Metonymy", "Personification", "Oxymoron"],
correctAnswer: "Hyperbole"
},
{
question: "2. 'The darkness crept in like a stealthy thief.' This is an example of which figure of speech?",
options: ["Metonymy", "Personification", "Simile", "Metaphor"],
correctAnswer: "Metaphor"
},
{
question: "3. What figure of speech is used in the phrase 'The ship of state'?",
options: ["Metaphor", "Metonymy", "Synecdoche", "Personification"],
correctAnswer: "Metonymy"
},
{
question: "4. 'His words cut like a knife.' This is an example of:",
options: ["Hyperbole", "Simile", "Metaphor", "Oxymoron"],
correctAnswer: "Metaphor"
},
{
question: "5. Which figure of speech involves the use of exaggeration for rhetorical effect?",
options: ["Hyperbole", "Euphemism", "Paradox", "Irony"],
correctAnswer: "Hyperbole"
},
{
question: "6. 'Time flies like an arrow; fruit flies like a banana.' This is an example of:",
options: ["Paradox", "Euphemism", "Irony", "Metaphor"],
correctAnswer: "Irony"
},
{
question: "7. 'The law is a double-edged sword.' This is an example of:",
options: ["Metonymy", "Oxymoron", "Antithesis", "Synecdoche"],
correctAnswer: "Oxymoron"
},
{
question: "8. Which figure of speech involves the use of contradictory or contrasting ideas in a balanced or parallel structure?",
options: ["Chiasmus", "Epistrophe", "Paradox", "Antithesis"],
correctAnswer: "Antithesis"
},
{
question: "9. 'Love is an endless act of forgiveness.' This is an example of:",
options: ["Metaphor", "Hyperbole", "Paradox", "Euphemism"],
correctAnswer: "Paradox"
},
{
question: "10. What figure of speech is used when there is a deliberate repetition of the first letter or sound in a series of words?",
options: ["Metaphor", "Alliteration", "Irony", "Hyperbole"],
correctAnswer: "Alliteration"
},
];
const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress');
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 100;
const timerInterval = setInterval(updateTimer, 1000);
function updateTimer() {
if (timeLeft <= 0) {
clearInterval(timerInterval);
endQuiz();
} else {
const minutes = Math.floor(timeLeft / 100);
const seconds = timeLeft % 100;
timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
timeLeft--;
const progressWidth = ((100 - timeLeft) / 100) * 100;
progressBar.style.width = `${progressWidth}%`;
}
}
function showQuestion() {
if (currentQuestionIndex < questions.length) {
const currentQuestion = questions[currentQuestionIndex];
questionElement.textContent = currentQuestion.question;
optionsElement.innerHTML = '';
currentQuestion.options.forEach(option => {
const optionElement = document.createElement('div');
optionElement.classList.add('option');
optionElement.textContent = option;
optionElement.addEventListener('click', () => checkAnswer(option, currentQuestion.correctAnswer));
optionsElement.appendChild(optionElement);
});
} else {
endQuiz();
}
}
function checkAnswer(selectedOption, correctAnswer) {
if(selectedOption === correctAnswer) {
score++;
}
currentQuestionIndex++;
showQuestion();
}
function endQuiz() {
quizContainer.innerHTML = `
<h2>Quiz Ended!</h2>
<p>Your Score: <span id="final-score">${score}</span></p>
`;
clearInterval(timerInterval);
progressBar.style.width='100%';
}
showQuestion();