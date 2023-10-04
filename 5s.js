const questions=[
{
question: "1. Identify the part of speech in the sentence: 'The quick brown fox jumps over the lazy dog.'",
options: ["Verb", "Noun", "Adjective", "Adverb"],
correctAnswer: "Adjective"
},
{
question: "2. What is the function of a subordinating conjunction in a sentence?",
options: ["It joins two independent clauses.", "It connects two main ideas.", "It introduces a dependent clause and shows the relationship to the rest of the sentence.", "It expresses strong emotion."],
correctAnswer: "It introduces a dependent clause and shows the relationship to the rest of the sentence."
},
{
question: "3. Which part of speech can be used to express ownership or possession?",
options: ["Pronoun", "Verb", "Adjective", "Preposition"],
correctAnswer: "Adjective"
},
{
question: "4. In the sentence, 'She sang beautifully,' what is the part of speech of 'beautifully'?",
options: ["Noun", "Adjective", "Adverb", "Conjuction"],
correctAnswer: "Adverb"
},
{
question: "5. Identify the conjunction in the following sentence: 'I wanted to go to the concert, but I couldn't get tickets.'",
options: ["I", "but", "to", "get"],
correctAnswer: "but"
},
{
question: "6. Which part of speech is often used to introduce questions?",
options: ["Pronoun", "Verb", "Adverb", "Interjection"],
correctAnswer: "Adverb"
},
{
question: "7. What is the function of an interjection in a sentence?",
options: ["It connects two clauses.", "It adds detail to a noun.", "It expresses strong emotion or surprise.", "It modifies a verb."],
correctAnswer: "It expresses strong emotion or surprise."
},
{
question: "8. Which part of speech is used to show a relationship between words in a sentence, such as time, place, or direction?",
options: ["Adjective", "Conjuction", "Adverb", "Preposition"],
correctAnswer: "Preposition"
},
{
question: "9. What part of speech can be used to connect two independent clauses without a coordinating conjunction?",
options: ["Noun", "Adjective", "Semicolon", "Interjection"],
correctAnswer: "Semicolon"
},
{
question: "10. Which part of speech can be used to replace a noun and introduce dependent clauses?",
options: ["Pronoun", "Preposition", "Conjuction", "Verb"],
correctAnswer: "Pronoun"
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