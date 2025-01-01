const questions = document.querySelectorAll('.exercise_question');
const questionTexts = [];

questions.forEach(question => {
  questionTexts.push(question.textContent.trim());
});

if (questionTexts.length > 0) {
  alert('Questions récupérées :\n\n' + questionTexts.join('\n'));
} else {
  alert('Aucune question trouvée avec la classe "exercise_question".');
}

console.log('Questions récupérées :', questionTexts);
