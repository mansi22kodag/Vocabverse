const questions=[
{
question: "1. She is coming to the party, ___?",
options: ["isn't she", "isn't it", "does she", "will she"],
correctAnswer: "isn't she"
},
{
question: "2. We don't have any more milk, ___?",
options: ["do we", "don't we", "have we", "haven't we"],
correctAnswer: "do we"
},
{
question: "3. You like ice cream, ___?",
options: ["aren't you", "like you", "do you", "don't you"],
correctAnswer: "don't you"
},
{
question: "4. They won't be late, ___?",
options: ["will they", "aren't they", "won't they", "don't they"],
correctAnswer: "will they"
},
{
question: "5. She can swim, ___?",
options: ["can't she", "can she", "can't swim she", "does she"],
correctAnswer: "can't she"
},
{
question: "6. He's coming with us, ___?",
options: ["isn't he", "is he", "he's", "will he"],
correctAnswer: "isn't he"
},
{
question: "7. You've finished your homework, ___?",
options: ["haven't you", "you've", "don't you", "have you"],
correctAnswer: "haven't you"
},
{
question: "8. We should go now, ___?",
options: ["don't we", "we should", "should we", "shouldn't we"],
correctAnswer: "shouldn't we"
},
{
question: "9. They never miss a game, ___?",
options: ["do they", "never they", "won't they", "will they"],
correctAnswer: "do they"
},
{
question: "10. She knows the way, ___?",
options: ["does she ", "know she", "doesn't she", "will she"],
correctAnswer: "does she"
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