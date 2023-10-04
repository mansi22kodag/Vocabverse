const questions=[
{
question: "1. Which article is used before abstract nouns, such as 'freedom' or 'justice'?",
options: ["An", "A", "The", "None of the above"],
correctAnswer: "None of the Above"
},
{
question: "2. Choose the correct article to complete the sentence: 'He was elected president of _____ '",
options: ["A", "The", "An", "None of the above"],
correctAnswer: "The"
},
{
question: "3. In the phrase '_____ Alps,' which article should be used?",
options: ["The", "A", "An", "None of the above"],
correctAnswer: "The"
},
{
question: "4. Which article is used before the names of countries that are singular and have common nouns, such as 'The United Kingdom'?",
options: ["A", "The", "An", "None of the above"],
correctAnswer: "The"
},
{
question: "5. What is the correct article to use before a plural noun that represents a specific group or class of things, such as 'The rich'?",
options: ["An", "A", "The", "None of the above"],
correctAnswer: "The"
},
{
question: "6. Choose the correct article to complete the sentence: 'She has _____ incredible talent for music.'",
options: ["A", "The", "An", "None of the above"],
correctAnswer: "An"
},
{
question: "7. In the phrase '_____ 19th century,' which article should be used?",
options: ["The", "A", "An", "None of the above"],
correctAnswer: "The"
},
{
question: "8. Which article is used before the names of museums, theaters, and hotels?",
options: ["A", "The", "An", "None of the above"],
correctAnswer: "The"
},
{
question: "9. What is the correct article to use before a singular noun when you are talking about a class of things in a general sense, e.g., 'A dog is a loyal animal'?",
options: ["An", "A", "The", "None of the above"],
correctAnswer: "A"
},
{
question: "10. Choose the correct article to complete the sentence: 'I need _____ permission to access this file.'",
options: ["The", "A", "An", "None of the above"],
correctAnswer: "An"
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