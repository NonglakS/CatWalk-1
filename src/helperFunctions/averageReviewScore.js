export default function averageReviewScore(scores) {
  let totalScore = 0;
  let totalVotes = 0;

  Object.keys(scores).forEach((score) => {
    totalScore += Number(score) * Number(scores[score]);
    totalVotes += Number(scores[score]);
  });

  const average = (totalScore / totalVotes);
  return totalVotes ? Number(average.toFixed(1)) : 0;
}
