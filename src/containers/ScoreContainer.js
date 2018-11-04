import {connect} from 'react-redux';
import Score from '../components/Score';
import App from '../components/App';
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

// export default connect(mapStateToProps,mapDispatchToProps)(Score)

export const ScoreContainer = connect(mapStateToProps, mapDispatchToProps)(Score);
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


// import {connect} from 'react-redux';
// import App from '../components/App';

// const mapStateToProps = state => {
//     console.log(state.score.score, state.score.lives, "from app container")
//     return{
//         score: state.score.score,
//         lives: state.score.lives
//     }
// }

// export default connect(mapStateToProps)(App)