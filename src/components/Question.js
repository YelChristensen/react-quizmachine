import React from "react";

class Question extends React.Component {
 
  componentDidMount() {
    console.log("Step 1: calling fetchQuestion");
    this.props.fetchQuestion();
  }

  render() {
    const answerArr = this.props.question.correct_answer? this.props.question.incorrect_answers
      .concat(this.props.question.correct_answer)
      .sort() : []
      console.log(answerArr)

    return (
      <div className="question">
        <h4 className="question-text">{this.props.question.question}</h4>
        <form>
          {answerArr.map(answer => (
            <React.Fragment>
              <input
                key={answer}
                type="radio"
                value={answer}
                name={this.props.question.question}
              />
              {answer}
            </React.Fragment>
          ))}
        </form>
      </div>
    );
  }
    
}

export default Question;
