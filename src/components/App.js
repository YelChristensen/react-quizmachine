import React from "react";
import QuestionContainer from "../containers/QuestionContainer";
import ScoreContainer from "../containers/ScoreContainer";

class App extends React.Component {
  render() {
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
