const questions=[
{
question: "1. Which tense is used to describe an action that will be completed before a specific time in the future?",
options: ["Future perfect continuous", "Present simple", "Past perfect", "Future continuous"],
correctAnswer: "Future perfect continuous"
},
{
question: "2. What is the past continuous tense of 'They sing'?",
options: ["They have sung", "They had sung", "They sang", "They were singing"],
correctAnswer: "They were singing"
},
{
question: "3. In which tense is the sentence 'I will have been working for six hours'?",
options: ["Past perfect continuous", "Present perfect continuous", "Future perfect continuous", "Past continuous"],
correctAnswer: "Future perfect continuous"
},
{
question: "4. Identify the tense in the sentence: 'By next week, she will have completed her project.'",
options: ["Future perfect", "Future perfect continuous", "Conditional", "Past perfect"],
correctAnswer: "Future perfect"
},
{
question: "5. Which tense is used for actions that were ongoing in the past and were interrupted by another action?",
options: ["Past perfect continuous", "Past continuous", "Past simple", "Past perfect"],
correctAnswer: "Past continuous"
},
{
question: "6. What is the difference between the simple future tense and the future continuous tense?",
options: ["Simple future is used for plans, while future continuous is used for predictions.", "Simple future is used for actions in progress, while future continuous is used for completed actions.", "Simple future is used for completed actions, while future continuous is used for actions in progress.", "There is no difference; they are the same tense."],
correctAnswer: "Simple future is used for plans, while future continuous is used for predictions."
},
{
question: "7. In the sentence 'I will have finished the report by tomorrow,' which tense is used for the action that will be completed before a specific point in the future?",
options: ["Past perfect continuous", "Present continuous", "Future perfect", "Past simple"],
correctAnswer: "Future perfect"
},
{
question: "8. What is the correct tense to use when describing an action that started in the past, continued for some time, and then ended in the past?",
options: ["Present perfect continuous", "Past continuous", "Past simple", "Present perfect"],
correctAnswer: "Past continuous"
},
{
question: "9. Which tense is used to express an action that will definitely happen in the future?",
options: ["Future continuous", "Present simple", "Simple future", "Present continuous"],
correctAnswer: "Simple future"
},
{
question: "10. In the sentence 'I have been studying for two hours,' which tense is used to indicate the duration of the action?",
options: ["Present perfect", "Past simple", "Present simple", "Past perfect continuous"],
correctAnswer: "Present perfect"
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