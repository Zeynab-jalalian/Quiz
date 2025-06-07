let quizCategory = "Art";

const getRandomQuestion = () => { //choose a random question
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || []; //access to all questions of one ctegory
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]; //one random question of that
    return randomQuestion;
}

const showRandomQuestion = () => { //show that random question
    const currentQuestion = getRandomQuestion(); //current questuion is getRandomQuestion();
    if (!currentQuestion) return; // if no question do not go ahead

    document.querySelector(".question-text").textContent = currentQuestion.question; //show question in question-text
}

showRandomQuestion();