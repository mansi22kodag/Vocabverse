const questions=[
{
question: "1. Which figure of speech involves a deliberate exaggeration for emphasis or effect, often used in literature?",
options: ["Metonymy", "Hyperbole", "Oxymoron", "Euphemism"],
correctAnswer: "Hyperbole"
},
{
question: "2. What figure of speech replaces the name of one thing with the name of something else closely associated with it?",
options: ["Metaphor", "Allusion", "Synecdoche", "Irony"],
correctAnswer: "Synecdoche"
},
{
question: "3. In which figure of speech are contradictory terms combined for a paradoxical effect?",
options: ["Hyperbole", "Oxymoron", "Alliteration", "Simile"],
correctAnswer: "Oxymoron"
},
{
question: "4. Which figure of speech involves the repetition of vowel sounds within words or at the beginning of words?",
options: ["Assonance", "Consonance", "Alliteration", "Onomatopoeia"],
correctAnswer: "Assonance"
},
{
question: "5. What figure of speech is a reference to a well-known person, place, event, or work of literature?",
options: ["Allusion", "Metaphor", "Paradox", "Simile"],
correctAnswer: "Allusion"
},
{
question: "6. What figure of speech is employed in the phrase 'The pen is mightier than the sword'?",
options: ["Hyperbole", "Metonymy", "Metaphor", "Oxymoron"],
correctAnswer: "Metaphor"
},
{
question: "7. In the sentence 'The city never sleeps,' what figure of speech is used?",
options: ["Personification", "Synecdoche", "Oxymoron", "Hyperbole"],
correctAnswer: "Personification"
},
{
question: "8. 'The thunder growled like an angry beast' is an example of:",
options: ["Simile", "Metaphor", "Onomatopoeia", "Personification"],
correctAnswer: "Onomatopoeia"
},
{
question: "9. What figure of speech is used in the phrase 'She sings like an angel'?",
options: ["Simile", "Metaphor", "Personification", "Oxymoron"],
correctAnswer: "Simile"
},
{
question: "10. Which figure of speech involves the repetition of vowel sounds, such as 'sweet dreams'?",
options: ["Alliteration", "Assonance", "Consonance", "Onomatopoeia"],
correctAnswer: "Assonance"
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