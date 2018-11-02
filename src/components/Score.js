import React from "react";

function Score({ score, lives }) {
  return (
    <React.Fragment>
      <div>Score: {score}</div>
      <div>Quiz</div>
      <div>Lives: {lives}</div>
    </React.Fragment>
  );
}

export default Score;
