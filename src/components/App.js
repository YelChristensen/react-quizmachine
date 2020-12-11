import React from "react";
import QuestionContainer from "../containers/QuestionContainer";
import { ScoreContainer } from "../containers/ScoreContainer";

function App({ score, lives }) {
  console.log(score, lives, "from app");
  if (!lives) {
    return (
      <section className="results">
        <h2>GAME Over</h2>
        <h3>You scored: {score}</h3>
        <video id="end-video" src="../../static/crying.mp4" autoPlay></video>
      </section>
    );
  } else {
    return (
      <React.Fragment>
        <header>
          <ScoreContainer />
        </header>
        <main>
          <QuestionContainer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
