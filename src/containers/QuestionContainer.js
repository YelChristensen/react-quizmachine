import {connect} from 'react-redux';
import Question from '../components/Question';
// import Answers from '../components/Answers';
import {performFetch, calculateScore} from '../actions';

const mapStateToProps = state => {
    console.log("Step 6 - calling mapStateToProps in QuestionContainer", state.score.lives);
    return{
        question: state.question,
        lives: state.score.lives
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: answer => {
            console.log(answer);
            dispatch(calculateScore(answer))
            dispatch(performFetch())
        },
        fetchQuestion: () => {
            console.log("Step 2: getting action creator")
            dispatch(performFetch())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Question)
// const AnswersContainer = connect(mapStateToProps,mapDispatchToProps)(Answers)

// multiple named exports 