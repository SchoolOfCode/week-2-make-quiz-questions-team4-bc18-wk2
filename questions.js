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
  },
  {
    question_text: "What is the name of the mainfesto we studied?",
    question_type: "multiple_choice",
    options: ["Waterfall", "Agile", "Pair Programming", "School of Code"],
    correct_option: 1,
    correct_explanation: "Waterfall and Agile are two workflow models, however we focused specifically on Agile as this is the preferred workflow to follow."
  },
  {
    question_text: "How many key values are there in the Agile manifesto?",
    question_type: "multiple_choice",
    options: ["2", "3", "4", "5"],
    correct_option: 2,
    correct_explanation: "The Agile Manifesto consists of four key values:Individuals and interactions over processes and tools; Working software over comprehensive documentation; Customer collaboration over contract negotiation; Responding to change over following a plan."
  },
  {
    question_text: "How many principles are there in the Agile manifesto?",
    question_type: "multiple_choice",
    options: ["10", "11", "12", "13"],
    correct_option: 2,
    correct_explanation: "The Agile Manifesto consists of twelve key values: #1 Satisfy Customers Through Early and Continuous Delivery; #2 Welcome Changing Requirements Even Late in the Project; #3 Deliver Value Frequently; #4 Break the Silos of Your Project; #5 Build Projects Around Motivated Individuals; #6 The Most Effective Way of Communication is Face-to-face; #7 Working Software is the Primary Measure of Progress; #8 Maintain a Sustainable Working Pace; #9 Continuous Excellence Enhances Agility; #10 Simplicity is Essential; #11 Self-organizing Teams Generate Most Value; #12 Regularly Reflect and Adjust Your Way of Work to Boost Effectiveness."
  },
  {
    question_text: "What are the 4 phases of the day?",
    question_type: "multiple_choice",
    options: ["Focus, Warm-down, Preparation, Recovery", "Peak, Rest, Warm-up, Reflection", "Concentration, Relaxation, Planning, Recharging", "Work, Unwind, Get Ready, Sleep"],
    correct_option: 0,
    correct_explanation: "Option A is the correct answer, these are the correct phases as per our learning from week 1 of SoC."
  },
  {
    question_text: "What does MVP stand for in the context of CS?",
    question_type: "multiple_choice",
    options: ["Most valuable project", "Maximum value proposition", "Minimum viable product", "Most valuable player"],
    correct_option: 2,
    correct_explanation: "Minimum viable product is correct as it refers to the simplest version of a product that can be released."
  },
  {
    question_text: "What is the correct flow of this git commands",
    question_type: "multiple_choice",
    options: ["git pull, git add,  git commit, git push", "git add, git pull, git commit, git push", "pull, add, commit, push", " git clone , git fowar, git commit, git push"],
    correct_option: 0,
    correct_explanation: "You must include the word git infornt of the commands and they must be used in the correct order"
  },
  {
    question_text: "What does the acronym CHRIS stand for ?",
    question_type: "multiple_choice",
    options: [ "Code, Hunter, Remember, Inclusion, Sorting", "Challenge, Hunger, Retrieval, Interleaved Practice, Spaced Repetion", "Crunch, Helping, Retrieval, Interconectivity, School of code", "Chance, Hunger, Retrieval, Intermittent Breaks, Cool Down"],
    correct_option: 1,
    correct_explanation: "These are the correct specfic acronym as per given by school of code"
  },
  {
    question_text: "What two roles we where split into for the drawing workshop ?",
    question_type: "multiple_choice",
    options: ["Queen and worker", "Bob and Builder", "Architect and Builder", "Driver and Navigator"],
    correct_option: 2,
    correct_explanation: "We where split into Architects and Builders, The Architects could see the plans and would have to describe them to the builders"
  }
]

// Don't worry about this, we're just exporting the questions
module.exports = questions;
