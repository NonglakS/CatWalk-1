/* eslint-disable max-len */
export default function getRecommendPercent(recommendCount, totalCount) {
  return recommendCount && totalCount ? Math.round((Number(recommendCount) / Number(totalCount)) * 100) : 0;
}
