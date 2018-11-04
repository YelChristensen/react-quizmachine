import React from "react";

function Score({ score, lives }) {
  return (
    <div className="score">
      <div>Score: {score}</div>
      <h2>sQuizMinion</h2>
      <div>Lives: {lives}</div>
    </div>
  );
}

export default Score;
