var questions = document.querySelectorAll('.exercise_question');

// Vérifier si des questions ont été trouvées
if (questions.length === 0) {
  console.log('Aucune question trouvée avec la classe "exercise_question".');
} else {
  // Extraire le texte de chaque question
  const questionTexts = Array.from(questions, question => question.textContent.trim());
  console.log('Questions récupérées :', questionTexts);
  alert('Questions récupérées :\n\n' + questionTexts.join('\n'));
}
