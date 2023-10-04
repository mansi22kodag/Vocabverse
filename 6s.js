const questions=[
{
question: "1. In the sentence, 'She had never seen such a beautiful sunset,' what is the function of 'such'?",
options: ["Adjective", "Adverb", "Pronoun", "Conjuction"],
correctAnswer: "Adjective"
},
{
question: "2. Identify the part of speech of the word in parentheses: 'The cat (which is black) is sleeping.'",
options: ["Noun", "Adjective", "Verb", "Conjuction"],
correctAnswer: "Adjective"
},
{
question: "3. What is an anaphoric pronoun, and which part of speech does it replace?",
options: ["It refers to a specific noun mentioned earlier in the text.", "It replaces a verb in a sentence.", "It functions as an adverb.", "It introduces a new subject."],
correctAnswer: "It refers to a specific noun mentioned earlier in the text."
},
{
question: "4. Which part of speech is used to link clauses or words with similar or contrasting meanings?",
options: ["Noun", "Preposition", "Conjunctive adverb", "Verb"],
correctAnswer: "Conjunctive adverb"
},
{
question: "5. In the sentence, 'The students who studied hard passed the exam,' what is the function of 'who studied hard'?",
options: ["Adjective clause", "Adverb clause", "Noun clause", "Verb clause"],
correctAnswer: "Adjective clause"
},
{
question: "6. What part of speech can be used to express uncertainty or conditionality in a sentence?",
options: ["Subordinating conjunction", "Modal verb", "Preposition", "Interjection"],
correctAnswer: "Modal verb"
},
{
question: "7. Identify the part of speech in the following sentence: 'However, I will do my best.'",
options: ["Noun", "Adjective", "Adverb", "Conjunction"],
correctAnswer: "Conjunction"
},
{
question: "8. What is the difference between a transitive and intransitive verb, and which part of speech is affected by this difference?",
options: ["Transitive verbs require a direct object, while intransitive verbs do not. This affects the noun.", "Transitive verbs modify adjectives, while intransitive verbs modify adverbs. This affects the adverb.", "Transitive verbs connect independent clauses, while intransitive verbs connect dependent clauses. This affects the conjunction.", "Transitive verbs replace pronouns, while intransitive verbs replace nouns. This affects the pronoun."],
correctAnswer: "Transitive verbs require a direct object, while intransitive verbs do not. This affects the noun."
},
{
question: "9. Which part of speech can be used to indicate the time frame in which an action takes place?",
options: ["Verb", "Noun", "Preposition", "Adverb"],
correctAnswer: "Adverb"
},
{
question: "10. In the sentence, 'Although it was raining, she went for a walk,' what is the part of speech of 'Although'?",
options: ["Adverb", "Subordinating conjunction", "Interjection", "Pronoun"],
correctAnswer: "Subordinating conjunction"
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