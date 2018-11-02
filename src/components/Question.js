import React from "react";
import { decode } from 'he';

class Question extends React.Component {
  componentDidMount() {
    console.log("Step 1: calling fetchQuestion");
    this.props.fetchQuestion();
  }

  render() {
    const answerArr = this.props.question.correct_answer
      ? this.props.question.incorrect_answers
          .concat(this.props.question.correct_answer)
          .sort()
      : [];
    console.log(this.props.question.correct_answer);

    return (
      <div className="question">
        <h4 className="question__text">{this.props.question.question}</h4>
        <ul className="question__answers">
          {answerArr.map(answer => (
            <li 
                key={answer}
                onClick={(event) => {
                    this.props.handleClick(answer===this.props.question.correct_answer)
                }}
            >{answer}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Question;
