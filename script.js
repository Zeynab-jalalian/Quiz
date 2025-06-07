let quizCategory = "Art";

const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || []; //access to all questions of one ctegory
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]; //one random question of that
    return randomQuestion;
}

const randomQuestion = () => {
    const currentQuestion = getRandomQuestion();
    if (!currentQuestion) return;

    document.querySelector(".question-text").textContent = currentQuestion.question;
}

randomQuestion();