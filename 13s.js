const questions=[
{
question: "1. Which of the following sentences uses the comparative degree correctly?",
options: ["She's the tallest in her class.", "He's the tall boy in the class.", "This is the more tall tree in the park.", "She's taller than any other students."],
correctAnswer: "She's the tallest in her class."
},
{
question: "2. What is the superlative form of the word 'good'?",
options: ["goodest", "gooder", "best", "better"],
correctAnswer: "best"
},
{
question: "3. Complete the sentence: 'This book is _____ interesting than the one I read last week.'",
options: ["more", "most", "much", "many"],
correctAnswer: "more"
},
{
question: "4. Choose the correct comparison: 'My car is _____ than his car.'",
options: ["more fast", "fastest", "fastly", "faster"],
correctAnswer: "faster"
},
{
question: "5. What is the opposite of the word 'big'?",
options: ["bigger", "short", "small", "biggest"],
correctAnswer: "small"
},
{
question: "6. Select the correct comparative form: 'She sings _____ than her sister.'",
options: ["good", "better", "best", "well"],
correctAnswer: "better"
},
{
question: "7. Which word means 'the highest degree of hotness'?",
options: ["hot", "hotter", "hottest", "hotly"],
correctAnswer: "hottest"
},
{
question: "8. What is the comparative form of 'far'?",
options: ["far", "farther", "farest", "further"],
correctAnswer: "farther"
},
{
question: "9. Complete the sentence: 'This pizza tastes _____ than the one I had yesterday.'",
options: ["good", "better", "best", "well"],
correctAnswer: "better"
},
{
question: "10. Which word means 'the least amount'?",
options: ["least", "less", "lesser", "littlest"],
correctAnswer: "least"
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