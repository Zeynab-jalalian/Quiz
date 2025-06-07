let quizCategory="Art";

const getRandomQuestion=()=>{
    const categoryQuestions=questions.find(cat=>cat.category.toLowerCase() === quizCategory.toLowerCase()).questions; //access to all questions of one ctegory
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]; //one random question of that
    console.log(randomQuestion);    
}

getRandomQuestion();