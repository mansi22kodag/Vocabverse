const questions=[
{
question: "1. What is the correct article to use before a vowel sound?",
options: ["A", "An", "The", "None of the above"],
correctAnswer: "An"
},
{
question: "2. Choose the correct article to complete the sentence: 'I need _____ pen to write this letter.'",
options: ["An", "The", "A", "None of the above"],
correctAnswer: "A"
},
{
question: "3. Which article should be used before singular, countable nouns that are specific or known to the speaker and listener?",
options: ["A", "An", "The", "None of the above"],
correctAnswer: "The"
},
{
question: "4. In the phrase '_____ apple', which article should be used?",
options: ["An", "A", "the", "None of the above"],
correctAnswer: "An"
},
{
question: "5. Which article is used before a noun that is not specific or known to the speaker and listener?",
options: ["A", "An", "The", "None of the above"],
correctAnswer: "A"
},
{
question: "6. What is the correct article to use before uncountable nouns?",
options: ["An", "The", "A", "None of the above"],
correctAnswer: "None of the above"
},
{
question: "7. Choose the correct article to complete the sentence: 'She bought _____ book yesterday.'",
options: ["A", "An", "The", "None of the above"],
correctAnswer: "The"
},
{
question: "8. In the phrase '_____ orange,' which article should be used?",
options: ["An", "The", "A", "None of the above"],
correctAnswer: "A"
},
{
question: "9. What is the correct article to use before an adjective that starts with a vowel sound, such as 'honest'?",
options: ["A", "An", "The", "None of the above"],
correctAnswer: "An"
},
{
question: "10. Which article is used before proper nouns?",
options: ["An", "The", "A", "None of the above"],
correctAnswer: "None of the above"
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