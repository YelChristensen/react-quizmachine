import {connect} from 'react-redux';
import Score from '../components/Score';
import {calculateScore} from '../actions';

const mapStateToProps = state => {
    return{
        score: state.score.score,
        lives: state.score.lives
    }
}

const mapDispatchToProps = dispatch => {
    return {
        performCalculation: score => dispatch(calculateScore(score))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Score)