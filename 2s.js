const questions=[
{
question: "1. Which article is used before superlative adjectives, such as 'best' or 'worst'?",
options: ["A", "An", "The", "None of the above"],
correctAnswer: "The"
},
{
question: "2. Choose the correct article to complete the sentence: 'He is _____ honest man.'",
options: ["The", "A", "An", "None of the above"],
correctAnswer: "The"
},
{
question: "3. In the phrase '_____ moon,' which article should be used?",
options: ["A", "An", "The", "None of the above"],
correctAnswer: "the"
},
{
question: "4. Which article is used before the names of mountain ranges?",
options: ["An", "The", "A", "None of the above"],
correctAnswer: "The"
},
{
question: "5. What is the correct article to use before a unique or one-of-a-kind noun, such as 'sun' or 'moon'?",
options: ["A", "An", "The", "None of the above"],
correctAnswer: "The"
},
{
question: "6. Choose the correct article to complete the sentence: 'I saw _____ eagle in the sky.'?",
options: ["A", "The", "An", "None of the above"],
correctAnswer: "The"
},
{
question: "7. In the phrase '_____ interesting book,' which article should be used?",
options: ["An", "A", "The", "None of the above"],
correctAnswer: "The"
},
{
question: "8. Which article is used before the names of oceans?",
options: ["A", "An", "The", "None of the above"],
correctAnswer: "The"
},
{
question: "9. What is the correct article to use before a singular noun when you are talking about a specific instance of that noun, e.g., 'The book I am reading'?",
options: ["The", "A", "An", "None of the above"],
correctAnswer: "The"
},
{
question: "10. Choose the correct article to complete the sentence: 'I need _____ advice on this matter.'?",
options: ["A", "The", "An", "None of the above"],
correctAnswer: "The"
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