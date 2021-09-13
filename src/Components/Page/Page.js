import React from "react";
import { useState } from "react";
import questions from "../Data/Data";
import { makeStyles, Typography } from "@material-ui/core";
import Header from "../Header/Header";



const useStyles = makeStyles({
  header: {
    fontSize: "35px",
  },
  box: {
    margin: "10px",
    padding: "10px",
    height: "85vh",
    width: "97.3%",
    border: "2px solid black",
    borderRadius: "10px",
  },

  answerSection: {},
  answerbtn: {
    background:"cyan",
    textColor: "white",
    height: "50px",
    width: "200px",
    display: "flex",
    justifyContent: "center",
    fontSize: "15px",
    cursor: "pointer",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "20px",
    padding: "5px",
    flexDirection: "column",
    position: "relative",

  },
  nextButton: {
    background: "lightGreen",
    margin: "5px 90% ",
    height: "50px",
    width: "100px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
  Start: {
    background: "lightGreen",
    margin: "0px 300px",
    height: "50px",
    width: "100px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
  score: {
    fontSize: "50px",
    color: "green",
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    height: "80px",
    width: "40%",
  },
});

function Page() {
  const classes = useStyles();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [score, setScore] = useState(0);

  const startTimer = () => {
    
  };

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleAnswerButtonClick = (isCorrect) => {
  
    if (isCorrect === true) {
      setScore(score + 5);


    }
  };

  return (
    <>
      <Header />
      <div className={classes.box}>
        <h1 className={classes.header}>This is my first Assessment App</h1>
        <div className={classes.app}>
          {showScore ? (
            <div className={classes.score}>
              You Scored {score} / {questions.length * 5}
            </div>
          ) : (
            <>
              <div className={classes.questionSection}>
                <div className={classes.questionCount}>
                  <h2>Question.{currentQuestion + 1}</h2>
                </div>
                <div className={classes.questionText}>
                  <Typography variant="h4">
                    {questions[currentQuestion].questionText}
                  </Typography>
                </div>
              </div>

              <div className={classes.answerSection}>
                {questions[currentQuestion].answerOptions.map(
                  (answerOptions) => (
                    <button
                  
                      className={classes.answerbtn}
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                    >
                      {answerOptions.answerText}
                    </button>
                  )
                )}
              </div>
              <div>
                <button onClicked={startTimer} className={classes.Start}>
                  Start
                </button>
                <button onClick={nextQuestion} className={classes.nextButton}>
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
