export default function makeAverageStars(score) {
  const wholeScores = [0, 1, 2, 3, 4, 5];
  let roundedScore = score ? Math.round(score * 2) / 2 : 0;
  const result = [];
  if (wholeScores.includes(roundedScore)) {
    for (let i = 0; i < roundedScore; i++) {
      result.push(1);
    }
    for (let i = 0; i < 5 - roundedScore; i++) {
      result.push(0);
    }
  } else {
    roundedScore -= 0.5;
    for (let i = 0; i < roundedScore; i++) {
      result.push(1);
    }
    result.push(2);
    for (let i = 0; i < 4 - roundedScore; i++) {
      result.push(0);
    }
  }

  return result;
}
