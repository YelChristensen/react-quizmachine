import {connect} from 'react-redux';
import Question from '../components/Question';
import {performFetch} from '../actions';

const mapStateToProps = state => {
    console.log("Step 6 - calling mapStateToProps in QuestionContainer");
    return{
        question: state.question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion: () => {
            console.log("Step 2: getting action creator")
            dispatch(performFetch())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Question);