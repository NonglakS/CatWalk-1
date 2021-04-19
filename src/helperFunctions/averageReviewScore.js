export default function averageReviewScore(scores) {
  let totalScore = 0;
  let totalVotes = 0;

  Object.keys(scores).forEach((score) => {
    totalScore += Number(score) * Number(scores[score]);
    totalVotes += Number(scores[score]);
  });

  return totalVotes ? totalScore / totalVotes : 0;
}