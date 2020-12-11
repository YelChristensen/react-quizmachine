import React from "react";
import { decode } from "he";

class Question extends React.Component {
  constructor() {
    super();
    this.changeStyle = this.changeStyle.bind(this);
  }
  componentDidMount() {
    console.log("Step 1: calling fetchQuestion");
    this.props.fetchQuestion();
  }

  changeStyle(event) {
    event.target.style.backgroundColor = "#37678d";
    event.target.style.color = "white";
  }

  render() {
    const answerArr = this.props.question.correct_answer
      ? this.props.question.incorrect_answers
          .concat(this.props.question.correct_answer)
          .sort()
      : [];
    console.log(this.props.question.correct_answer);

    if (!this.props.question.question) {
      return <div>Loading</div>;
    }
    const yay = new Audio("../../static/yay.mp4");
    const fart = new Audio("../../static/fart.mp4");

    return (
      <div className="question">
        <h4 className="question__text">
          {decode(this.props.question.question)}
        </h4>
        <ul className="question__answers">
          {answerArr.map((answer) => (
            <li
              key={answer}
              onClick={(event) => {
                this.changeStyle(event);
                answer === this.props.question.correct_answer
                  ? yay.play()
                  : fart.play();
                if (this.props.lives > 0) {
                  this.props.handleClick(
                    answer === this.props.question.correct_answer
                  );
                }
              }}
            >
              {decode(answer)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Question;
