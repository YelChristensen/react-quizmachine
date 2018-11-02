export function performFetch(){
  return function(dispatch){
    console.log("Step 3: calling fetch ")
    fetch('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(response => response.json())
    .then(result => {
      console.log("second .then in fetch", result)
      dispatch(receiveQuestion(result))
    })
    .catch(error => alert("Something went wrong with fetch!", error))
  }
}

export function receiveQuestion(result){
  console.log("Step 4 - creating RECEIVE_QUESTION question object")
  return{
    type: 'RECEIVE_QUESTION',
    question: result.results[0]
  }
}