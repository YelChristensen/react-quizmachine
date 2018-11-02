function score(state = {score: 0, lives: 3}, action) {
  switch (action.type) {
    case "INCREASE_SCORE":
        let newScore = state.score;
        let newLives = state.lives;
        action.score ? newScore += 1 : (state.lives > 0 ? newLives -= 1 : newScore = 0)
        const updatedState = Object.assign({}, state, {score: newScore, lives: newLives})
      return updatedState;

    default:
      return state;
  }
}

export default score;
