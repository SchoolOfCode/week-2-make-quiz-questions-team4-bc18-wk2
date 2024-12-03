// questions.js

const questions = [
   {
    question_text: "What was the first hackathon challenge?",
    question_type: "multiple_choice",
    options: ["Escape Room", "Calculator", "Spreadsheet", "Romeo and Juliet opera"],
    correct_option: 0,
    correct_explanation: "Romeo and Juliet was just an exercise. The hackathon was about an Escape Room"
  },
  {
    question_text: "Which of these is not a room in Disney ideation?",
    question_type: "multiple_choice",
    options: ["Dreamer", "Realist", "Critic", "objectivist"],
    correct_option: 3,
    correct_explanation: "Dream is coming up with an impossible idea, realist is taking it down an achivable level, and critic is seeing flaws and preventing overscope. Where as objectivist is not part of this"
  }
]

// Don't worry about this, we're just exporting the questions
module.exports = questions;
