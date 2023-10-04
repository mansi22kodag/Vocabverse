const questions=[
{
question: "1. Choose the correct comparative form: 'The weather is _____ today than it was yesterday.'",
options: ["good", "well", "better", "best"],
correctAnswer: "better"
},
{
question: "2. Which of the following is the superlative form of 'famous'?",
options: ["more famous", "famouser", "famouser", "most famous"],
correctAnswer: "most famous"
},
{
question: "3. Complete the sentence: 'My laptop is _____ efficient than yours.'",
options: ["the most", "very", "more", "most"],
correctAnswer: "more"
},
{
question: "4. Which word means 'the highest degree of beauty'?",
options: ["beautifuller", "beautifulest", "gorgeous", "most beautiful"],
correctAnswer: "most beautiful"
},
{
question: "5. What is the correct comparison: 'He reads _____ books than his sister.'",
options: ["much", "many", "more", "most"],
correctAnswer: "more"
},
{
question: "6. What is the superlative form of 'far'?",
options: ["farther", "more far", "farthest", "further"],
correctAnswer: "farthest"
},
{
question: "7. Complete the sentence: 'This movie is _____ exciting than the one we saw last week.'",
options: ["very", "most", "much", "most exciting"],
correctAnswer: "much"
},
{
question: "8. Which word means 'the highest degree of coldness'?",
options: ["coldest", "colder", "coldly", "cold"],
correctAnswer: "coldest"
},
{
question: "9. What is the correct comparison: 'She sings _____ her sister.'",
options: ["as good as", "better as", "good as", "more good than"],
correctAnswer: "as good as"
},
{
question: "10. Which word means 'the least amount'?",
options: ["lesser", "less", "least", "littler"],
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