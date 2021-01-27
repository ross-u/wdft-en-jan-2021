function saveScore(name, score) {
  // Get the string data  from localStorage
  // Convert it to an array
  const scoreStr = localStorage.getItem('score');
  let scoreArr;

  const newScore = { name: name, score: score };

  // Add new score to the array
  if (!scoreStr) {
    scoreArr = [];
    scoreArr.push(newScore);
  } else if (scoreStr) {
    scoreArr = JSON.parse(scoreStr);
    scoreArr.push(newScore);
  }

  // Stringify the updated score array
  const updatedScoreStr =  JSON.stringify(scoreArr);
  // Store back the updated array string
  localStorage.setItem('score', updatedScoreStr);

}

function getScores() {
  const scoreStr = localStorage.getItem('score');
    // Add new score to the array
  if (!scoreStr) {
    scoreArr = [];
  } else if (scoreStr) {
    scoreArr = JSON.parse(scoreStr);
  }

  return scoreArr;
}

// saveScore('Uros', 1234);


const v = getScores();
console.log('v', v);