const questions=[
{
question: "1. What is a figure of speech that makes a direct comparison between two unlike things using 'like' or 'as' called?",
options: ["Simile", "Metaphor", "Hyperbole", "Personification"],
correctAnswer: "Simile"
},
{
question: "2. Which figure of speech involves giving human qualities to non-human entities or objects?",
options: ["Irony", "Hyperbole", "Personification", "Onomatopoeia"],
correctAnswer: "Personification"
},
{
question: "3. What figure of speech is used to exaggerate for emphasis or effect?",
options: ["Alliteration", "Metaphor", "Hyperbole", "Oxymoron"],
correctAnswer: "Hyperbole"
},
{
question: "4. What figure of speech is a concise expression in which contradictory terms are combined?",
options: ["Hyperbole", "Simile", "Oxymoron", "Alliteration"],
correctAnswer: "Oxymoron"
},
{
question: "5. Which figure of speech repeats the same consonant sound at the beginning of several words in close succession?",
options: ["Alliteration", "Onomatopoeia", "Simile", "Metaphor"],
correctAnswer: "Alliteration"
},
{
question: "6. What figure of speech involves using words that imitate the sound they represent?",
options: ["Onomatopoeia", "Hyperbole", "Simile", "Personification"],
correctAnswer: "Onomatopoeia"
},
{
question: "7. Which figure of speech suggests a comparison without using 'like' or 'as'?",
options: ["Simile", "Metaphor", "Personification", "Oxymoron"],
correctAnswer: "Metaphor"
},
{
question: "8. What figure of speech involves the use of words that appeal to the senses, creating a vivid mental image?",
options: ["Hyperbole", "Onomatopoeia", "Alliteration", "Imagery"],
correctAnswer: "Imagery"
},
{
question: "9. What figure of speech involves the use of a word that is the opposite of its literal meaning?",
options: ["Irony", "Irony", "Hyperbole", "Simile"],
correctAnswer: "Irony"
},
{
question: "10. Which figure of speech is a type of exaggeration that is not meant to be taken literally?",
options: ["Personification", "Simile", "Hyperbole", "Oxymoron"],
correctAnswer: "Hyperbole"
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