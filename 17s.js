const questions=[
{
question: "1. It's a beautiful day, ___?",
options: ["is it", "isn't it", "it is", "was is"],
correctAnswer: "isn't it"
},
{
question: "2. He hasn't been here before, ___?",
options: ["he hasn't", "has he", "isn't he", "he hasn't been"],
correctAnswer: "has he"
},
{
question: "3. You're going to the party, ___?",
options: ["you're", "are you", "do you", "are't you"],
correctAnswer: "are you"
},
{
question: "4. They had a great time, ___?",
options: ["did they", "has they", "didn't they", "didn't have they"],
correctAnswer: "did they"
},
{
question: "5. You would like some tea, ___?",
options: ["wouldn't you", "you would", "would you", "do you"],
correctAnswer: "wouldn't you"
},
{
question: "6. He won't forget, ___?",
options: ["won't he", "forget he", "will he", "he won't"],
correctAnswer: "will he"
},
{
question: "7. She had never seen that movie, ___?",
options: ["hadn't she", "had she", "never she", "saw she"],
correctAnswer: "had she"
},
{
question: "8. They rarely go out, ___?",
options: ["go they", "rarely they", "do they", "did they"],
correctAnswer: "do they"
},
{
question: "9. You should try it, ___?",
options: ["should you", "you should", "shouldn't you", "do you"],
correctAnswer: "shouldn't you"
},
{
question: "10. She's going to be fine, ___?",
options: ["going she", "isn't she", "she is", "will she"],
correctAnswer: "isn't she"
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