export default function getReviewCount(ratings) {
  return ratings ? Object.values(ratings).reduce((memo, rating) => memo + Number(rating), 0) : 0;
}
