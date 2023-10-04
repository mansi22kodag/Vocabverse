const questions=[
{
question: "1. What is the present tense of the verb 'eat'?",
options: ["eats", "ate", "eating", "eaten"],
correctAnswer: "eats"
},
{
question: "2. Which tense is used to describe actions that happened yesterday?",
options: ["Present tense", "Past tense", "Future tense", "Continuous tense"],
correctAnswer: "Past tense"
},
{
question: "3. What is the future tense of 'I play tennis'?",
options: ["I played tennis", "I will play tennis", "I am playing tennis", "I have played tennis"],
correctAnswer: "I will play tennis"
},
{
question: "4. Which tense is formed by using 'has' or 'have' followed by the past participle?",
options: ["Past continuous", "Present perfect", "Future perfect", "Past perfect"],
correctAnswer: "Present perfect"
},
{
question: "5. What is the past tense of 'go'?",
options: ["gone", "going", "went", "goes"],
correctAnswer: "went"
},
{
question: "6. Which tense is used for actions happening right now?",
options: ["Past tense", "Present tense", "Future tense", "Conditional tense"],
correctAnswer: "Present tense"
},
{
question: "7. What is the future tense of 'I am studying'?",
options: ["I have studied", "I will have studied", "I will be studying", "I am going to study"],
correctAnswer: "I will be studying"
},
{
question: "8. Which tense is used for actions that will happen in the future but are not planned or scheduled?",
options: ["Future simple", "Present perfect continuous", "Future continuous", "Past continuous"],
correctAnswer: "Future simple"
},
{
question: "9. In the sentence 'She has already left,' which tense is used?",
options: ["Future perfect", "Past continuous", "Present simple", "Present perfect"],
correctAnswer: "Present perfect"
},
{
question: "10. What is the past continuous tense of 'I write'?",
options: ["I was writing", "I have written", "I wrote", "I had written"],
correctAnswer: "I was writing"
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