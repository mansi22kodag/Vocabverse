const questions=[
{
question: "1. What is the present perfect continuous tense of 'She reads a book'?",
options: ["She has been reading a book.", "She read a book.", "She is reading a book.", "She was reading a book."],
correctAnswer: "She has been reading a book."
},
{
question: "2. Which tense is used to express an action that started in the past, continued into the present, and is expected to continue into the future?",
options: ["Past continuous", "Future perfect continuous", "Present perfect continuous", "Present simple"],
correctAnswer: "Present perfect continuous"
},
{
question: "3. What is the future perfect tense of 'They will visit the museum'?",
options: ["They will have visited the museum.", "They will be visiting the museum.", "They have visited the museum.", "They visited the museum."],
correctAnswer: "They will have visited the museum."
},
{
question: "4. In the sentence 'I had finished my homework before dinner,' which tense is used for the action that was completed first?",
options: ["Present perfect continuous", "Past continuous", "Past perfect", "Present perfect"],
correctAnswer: "Past perfect"
},
{
question: "5. Which tense is appropriate to describe a future action that is dependent on a condition?",
options: ["Present continuous", "Future simple", "Conditional", "Future perfect continuous"],
correctAnswer: "Conditional"
},
{
question: "6. In the sentence 'She will have been practicing for years,' which tense is used to indicate the duration of the action?",
options: ["Past perfect continuous","Present perfect continuous","Future perfect continuous","Past continuous" ],
correctAnswer: "Future perfect continuous"
},
{
question: "7. Which tense is used for actions that were expected to happen but didn't in the past?",
options: ["Past perfect","Conditional","Future perfect","Present perfect continuous"],
correctAnswer: "Conditional"
},
  
{
question: "8. What is the past perfect continuous tense of 'He had been running'?",
options: ["He had run","He has been running","He had been run","He had been running"],
correctAnswer: "He had been running"
},
  
{
question: "9. In the sentence 'I will be studying all night,' which tense is used to describe an action that will start in the future and continue for some time?",
options: ["Future perfect","Present continuous","Future continuous","Present simple"],
correctAnswer: "Future continuous"
},
{
question: "10. Which tense is used to describe an action that was happening at a specific point in the past?",
options: ["Past perfect continuous","Past simple","Past continuous","Present perfect continuous"],
correctAnswer: "Past continuous"
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