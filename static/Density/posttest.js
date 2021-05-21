/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function () {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${currentQuestion.answers[letter]}
        </label><br>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"><strong> ${currentQuestion.question}</strong></div>
      <div class="answers"> ${answers.join("")}</div><br>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////
    const myQuestions = [
    {
        question: "1. The goal of clustering a set of data is to?", ///// Write the question inside double quotes
        answers:
        {
            a: "divide them into groups of data that are near each other",
            b: "choose the best data from the set",
            c: "determine the nearest neighbors of each of the data",
            d: "predict the class of data",///// Write the option 2 inside double quotes
        },
        correctAnswer: "a" ///// Write the correct option inside double quotes
    },
    {
        question: "2.How is the density of point p at the density based clustering defined?",
        answers: 
        {
            a: " MinPts minus number of data points in an epsilon-neighbourhood",
            b: "Number of data points in an epsilon-neighbourhood of p",
            c: "Reciprocal value of the distance from p to the nearest neighbour",
            d: "None",
        },
        correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
    {
        question: "3. Which points are eliminated by the DBSCAN algorithm?",  ///// Write the question inside double quotes
        answers: 
        {
            a: "Core Points",
            b: "Border Points",
            c: "Noice Points",
            d: "none"
        },
        correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
    {
        question: "4.A point is said to be core point if?",  ///// Write the question inside double quotes
        answers:
        {
        a: "the (epsilon) ϵ neighbourhood of the point contain more than or equal minpts",
        b: "the (epsilon) ϵ neighbourhood contain less than minpts but is in neighbourhood of a core point",
        c: "the (epsilon) ϵ neighbourhood of the point contain less than minpts",
        d: "None"
       },
        correctAnswer: "a"                ///// Write the correct option inside double quotes
    },







    ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
}) ();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
