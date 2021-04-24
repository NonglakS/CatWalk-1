import getReviewCount from './getReviewCount.js';

describe('getReviewCount', () => {
  it('aggregates the total number of reviews from an object of rating counts', () => {
    const ratings = {
      1: 1, 2: 1, 3: 1, 4: 1, 5: 1,
    };
    const expectedTotal = 5;
    const actualTotal = getReviewCount(ratings);

    expect(actualTotal).toEqual(expectedTotal);
  });
  it('handles undefined input', () => {
    const ratings = undefined;
    const expectedTotal = 0;
    const actualTotal = getReviewCount(ratings);

    expect(actualTotal).toEqual(expectedTotal);
  });
  it('handles ratings with non numeric values', () => {
    const ratings = {
      1: '6', 3: '7', 4: '6', 5: '20',
    };
    const expectedTotal = 39;
    const actualTotal = getReviewCount(ratings);

    expect(actualTotal).toEqual(expectedTotal);
  });
});
