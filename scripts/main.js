// Set up API key and URL
const apiKey = "61JIXDGa6QPJRgO5qlDnuKWTQIUzfp3d";

// Wait for the DOM to load before executing the code
document.addEventListener('DOMContentLoaded', () => {

    // Get references to HTML elements
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const gifContainer = document.getElementById('randomGiphy');
    

    const generateQuiz = async (questions) => {
        let currentQuestionIndex = 0;

        // Function to show a question
        const showQuestion = (question) => {
            if (question) {
                const html = Object.entries(question.answers).map(([letter, answer]) =>
                    `<label><input type="radio" name="question" value="${letter}">${letter}: ${answer}</label>`).join('');
                quizContainer.innerHTML =
                `
                    <div class="question">${question.question}</div>
                    <div class="answers">${html}</div>
                `;
            }
        };

        // Function to check the answer and move to the next question or end the quiz
        const checkAnswer = async() => {
            const userAnswer = (quizContainer.querySelector(`input[name=question]:checked`) || {}).value;
            const isCorrect = questions[currentQuestionIndex].correctAnswer.includes(userAnswer);
            if (resultsContainer) {
                resultsContainer.textContent = isCorrect ? 'Correct!' : 'Wrong!';
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(questions[currentQuestionIndex]);
            } else {
                submitButton.style.display = 'none';
            }
            showGif(isCorrect);
        };

        // Show the initial GIF and next button
        const showGif = async (isCorrect) => {
            const query = isCorrect ? 'celebration' : 'sad';
            const gifUrl = await giphyApi.getRGiphy(query);
            gifContainer.innerHTML = `<img src="${gifUrl}" alt="${query} gif">`;
        };

        // Show the first question
        showQuestion(questions[currentQuestionIndex]);

        // Add event listener for the submit button
        submitButton.addEventListener('click', () => {
            checkAnswer();
        });

    };

    // Array of questions for the quiz
    const myQuestions = [
        {
            question: "Are you ready?",
            answers: {
                a: "As I'll ever be",
                b: "Absolutely not, but OK",
                c: "This isn't marked, right?",
                d: "YES!"
            },
            correctAnswer: ["a","b","c","d"],
        },
        {
            question: "Which of the following is not a programming language?",
            answers: {
                a: "C++",
                b: "HTML",
                c: "Python",
                d: "JavaScript"
            },
            correctAnswer: "d"
        },
        {
            question: "Which CSS property is used to change the background color of a webpage?",
            answers: {
                a: "color",
                b: "background-color",
                c: "font-size",
                d: "border"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the name of the Git command that is used to commit changes to a repository?",
            answers: {
                a: "add",
                b: "commit",
                c: "push",
                d: "pull"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the name of the JavaScript library that is used to make HTTP requests from the browser?",
            answers: {
                a: "axios",
                b: "fetch",
                c: "jQuery",
                d: "XMLHttpRequest"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the term for a collection of data that is stored on a server and accessed by a client-side application?",
            answers: {
                a: "API",
                b: "Client-side code",
                c: "Database",
                d: "Front-end code"
            },
            correctAnswer: "a"
        },
        {
            question: "LAST QUESTION! How great did we do?",
            answers: {
                a: "Amazing",
                b: "Well done",
                c: "Not so bad for 3 beginners",
                d: "100%"
            },
            correctAnswer: ["a","b","c","d"],
        }
    ];

    // Generate the quiz using the questions
    generateQuiz(myQuestions);
});





