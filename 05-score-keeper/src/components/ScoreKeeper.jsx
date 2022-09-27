import { useEffect } from "react";
import { useState } from "react";

const ScoreKeeper = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    if (savedScore === null) {
      localStorage.setItem("score", 0);
    }

    setScore(localStorage.getItem("score"));
  }, []);

  const increaseScore = () => {
    localStorage.setItem("score", +score + 1);
    setScore(+score + 1);
  };

  const decreaseScore = () => {
    localStorage.setItem("score", +score - 1);
    setScore(+score - 1);
  };

  return (
    <div className="score-keeper">
      <h1>Your score is: {score}</h1>
      <button onClick={increaseScore}>+</button>
      <button onClick={decreaseScore}>-</button>
    </div>
  );
};

export default ScoreKeeper;
