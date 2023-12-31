// Define your quiz questions and answers as an array of objects
const questions = [
    {
      question: "Who is the creator of Linux?",
      answers: ["Linus Tech Tips", "Steve Jobs", "Linus Trovalds", "IBM"],
      correctAnswer: 2
    },
    {
      question: "Which distribution uses the APT?",
      answers: ["Arch", "Debian", "Void", "RHEL"],
      correctAnswer: 1
    },
    // Add more questions here...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Function to display the current question
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
  
    questionElement.textContent = questions[currentQuestion].question;
  
  //this only creates list element not radio buttons

    // answersElement.innerHTML = "";
    // questions[currentQuestion].answers.forEach((answer, index) => {
    //   const li = document.createElement("li");
    //   li.textContent = answer;
    //   li.addEventListener("click", checkAnswer);
    //   answersElement.appendChild(li);
    // });

    answersElement.innerHTML = "";
questions[currentQuestion].answers.forEach((answer, index) => {
  const li = document.createElement("li");

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "answer";
  radio.id = `answer${index}`;
  radio.value = answer;

  const label = document.createElement("label");
  label.setAttribute("for", `answer${index}`);
  label.textContent = answer;

  li.appendChild(radio);
  li.appendChild(label);
  li.addEventListener("click", checkAnswer);
  answersElement.appendChild(li);
});


  }
  
  // Function to check the selected answer
  function checkAnswer(event) {
    const selectedAnswer = event.target;
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");
  
    const selectedAnswerValue = selectedAnswer.value;
    const correctAnswerValue = questions[currentQuestion].answers[questions[currentQuestion].correctAnswer];
  
    if (selectedAnswerValue === correctAnswerValue) {
      feedbackElement.textContent = "Correct!";
      score++;
    } else {
      feedbackElement.textContent = "Incorrect!";
    }
  
    nextButton.disabled = false;
  }
  
  
  // Function to move to the next question
  function nextQuestion() {
    const feedbackElement = document.getElementById("feedback");
  
    feedbackElement.textContent = "";
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showScore();
    }
  }
  
  // Function to display the final score
  function showScore() {
    const questionContainer = document.getElementById("question-container");
    const feedbackContainer = document.getElementById("feedback-container");
    const scoreContainer = document.getElementById("score-container");
    const scoreElement = document.getElementById("score");
  
    questionContainer.style.display = "none";
    feedbackContainer.style.display = "none";
    scoreContainer.style.display = "block";
    scoreElement.textContent = score;
  }

  // function handleCheckbox(checkbox) {
  //   var checkboxes = document.getElementsByClassName('answer');
  //   checkboxes.forEach(function(currentCheckbox) {
  //     if (currentCheckbox !== checkbox) {
  //       currentCheckbox.checked = false;
  //     }
  //   });
  // }
  
  // Event listener for the next button
  document.getElementById("next-button").addEventListener("click", nextQuestion);
  
  // Initialize the quiz by displaying the first question
  displayQuestion();
  
