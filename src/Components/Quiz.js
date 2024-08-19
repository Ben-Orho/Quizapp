import "../App.css";
import { Questions } from "../Helpers/QuestionBank";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../Helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].OptionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].OptionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].OptionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].OptionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;