const questions=[
{
question: "1. What part of speech describes an action or state of being?",
options: ["Verb", "Noun", "Adjective", "Adverb"],
correctAnswer: "Verb"
},
{
question: "2. Which part of speech is used to name a person, place, thing, or idea?",
options: ["Adjective", "Verb", "Noun", "Pronoun"],
correctAnswer: "Noun"
},
{
question: "3. Which part of speech modifies a noun or pronoun by providing more information about it?",
options: ["Preposition", "Adjective", "Adverb", "Conjuction"],
correctAnswer: "Adjective"
},
{
question: "4. What is the term for a word that connects words, phrases, or clauses in a sentence?",
options: ["Adverb", "Preposition", "Conjuction", "Interjection"],
correctAnswer: "Conjuction"
},
{
question: "5. Which part of speech expresses strong emotion and is often followed by an exclamation mark?",
options: ["Interjection", "Verb", "Pronoun", "Adverb"],
correctAnswer: "Interjection"
},
{
question: "6. Which part of speech describes how, when, where, or to what extent an action is performed?",
options: ["Noun", "Pronoun", "Adverb", "Conjuction"],
correctAnswer: "Adverb"
},
{
question: "7. What part of speech takes the place of a noun and avoids repetition?",
options: ["Noun", "Adjective", "Pronoun", "Verb"],
correctAnswer: "Pronoun"
},
{
question: "8. Which part of speech shows the relationship between a noun or pronoun and other words in a sentence?",
options: ["Verb", "Adverb", "Preposition", "Conjuction"],
correctAnswer: "Preposition"
},
{
question: "9. What part of speech joins words or groups of words and indicates the relationship between them?",
options: ["Conjuction", "Noun", "Adjective", "Adverb"],
correctAnswer: "Conjuction"
},
{
question: "10. Which part of speech is used to express a state of being or existence?",
options: ["Adjective", "Adverb", "Verb", "Preposition"],
correctAnswer: "Verb"
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