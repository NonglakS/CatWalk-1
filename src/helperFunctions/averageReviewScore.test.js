import averageReviewScore from './averageReviewScore';

describe('averageReviewScore', () => {
  it('determines the average review score', () => {
    const scores = {
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
    };

    const expectedAverage = 3;
    const actualAverage = averageReviewScore(scores);

    expect(actualAverage).toEqual(expectedAverage);
  });
  it('determines the average review score when the score value is a string', () => {
    const scores = {
      1: '1',
      2: '1',
      3: '1',
      4: '1',
      5: '1',
    };

    const expectedAverage = 3;
    const actualAverage = averageReviewScore(scores);

    expect(actualAverage).toEqual(expectedAverage);
  });
  it('returns 0 when there are no ratings', () => {
    const scores = {};

    const expectedAverage = 0;
    const actualAverage = averageReviewScore(scores);

    expect(actualAverage).toEqual(expectedAverage);
  });
});
