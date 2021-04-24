const buildStars = (rating) => {
  const total = 5;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(true);
  }
  for (let i = 0; i < total - rating; i++) {
    stars.push(false);
  }
  return stars;
};

export default buildStars;
