const readline = require('readline-sync');

const questions = [];

// Function to add questions
function addQuestion(question, choices, answer) {
  questions.push({
    question, 
    choices,
    answer
  });
}

// Add some sample questions 
addQuestion("What is the capital of France?", ["Paris", "Berlin", "Madrid"], "Paris");
addQuestion("Who wrote The Lord of the Rings?", ["J. K. Rowling", "J. R. R. Tolkien", "Dan Brown"], "J. R. R. Tolkien");

function runQuiz() {

  let score = 0;

  // Loop through questions
  questions.forEach(q => {

    // Display question and choices
    console.log(q.question);
    q.choices.forEach(choice => {
      console.log(`- ${choice}`); 
    });

    // Get user's answer
    const userAnswer = readline.question("Your answer: ");

    // Check if user answer matches actual answer
    if(userAnswer.toLowerCase() === q.answer.toLowerCase()) {
      score++;
      console.log("Correct!");
    } else {
      console.log(`Wrong! The answer was ${q.answer}`);
    }

  });

  // Display final score
  console.log(`You scored ${score}/${questions.length}`);

}

runQuiz();