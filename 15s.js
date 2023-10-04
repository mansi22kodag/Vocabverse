const questions=[
{
question: "1. Choose the correct superlative form: 'This is _____ book I've ever read.'",
options: ["most interesting", "interestingest", "more interesting", "interestinger"],
correctAnswer: "most interesting"
},
{
question: "2. Complete the sentence: 'She runs _____ of all the athletes'",
options: ["the fast", "the fastest", "more fastly", "more fast"],
correctAnswer: "the fastest"
},
{
question: "3. What is the correct comparison: 'Her performance was _____ than I expected.'",
options: ["good", "better", "best", "the best"],
correctAnswer: "the best"
},
{
question: "4. Which word means 'the highest degree of intelligence'?",
options: ["intelligenter", "intelligentest", "more intelligent", "most intelligent"],
correctAnswer: "most intelligent"
},
{
question: "5. Complete the sentence: 'This restaurant serves _____ delicious food.'",
options: ["the most", "a very", "more", "most"],
correctAnswer: "most"
},
{
question: "6. What is the superlative form of 'soon'?",
options: ["soonest", "soonly", "sooner", "more soon"],
correctAnswer: "soonest"
},
{
question: "7. Choose the correct superlative form: 'The Grand Canyon is _____ I've ever seen.'",
options: ["the most beautiful", "beautifullest", "beautifulest", "most beautifuller"],
correctAnswer: "the most beautiful"
},
{
question: "8. Complete the sentence: 'This task is _____ difficult than I thought.'",
options: ["the most", "very", "much", "more"],
correctAnswer: "more"
},
{
question: "9. What is the correct comparison: 'She sings _____ anyone else in the choir.'",
options: ["as good as", "good as", "better than", "more good than"],
correctAnswer: "better than"
},
{
question: "10. Which word means 'the least amount'?",
options: ["least", "less", "littlest", "littler"],
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