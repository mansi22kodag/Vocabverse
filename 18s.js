const questions=[
{
question: "1. We can't have dessert, ___?",
options: ["can we", "can't we", "we can", "couldn't we"],
correctAnswer: "can we"
},
{
question: "2. She rarely speaks in public, ___?",
options: ["she rarely", "doesn't she", "does she", "rarely she"],
correctAnswer: "doesn't she"
},
{
question: "3. You'd better call them, ___?",
options: ["had you", "you'd better", "wouldn't you", "would you"],
correctAnswer: "would you"
},
{
question: "4. He can handle the pressure, ___?",
options: ["can he", "handle he", "can't he", "he can"],
correctAnswer: "can he"
},
{
question: "5. We ought to visit them, ___?",
options: ["oughtn't we", "should we", "we ought", "ought we"],
correctAnswer: "oughtn't we"
},
{
question: "6. They'd better not forget, ___?",
options: ["hadn't they", "better they", "they'd better", "not they"],
correctAnswer: "they'd better"
},
{
question: "7. She's going to finish the project, ___?",
options: ["isn't she", "she's going", "she is", "will she"],
correctAnswer: "isn't she"
},
{
question: "8. We've been waiting for hours, ___?",
options: ["have we", "we've", "haven't we", "waiting we"],
correctAnswer: "have we"
},
{
question: "9. It's a lovely day, ___?",
options: ["it is", "is it", "lovely it", "it's lovely"],
correctAnswer: "is it"
},
{
question: "10. They wouldn't mind helping, ___?",
options: ["would they", "they wouldn't", "mind they", "helping they"],
correctAnswer: "would they"
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