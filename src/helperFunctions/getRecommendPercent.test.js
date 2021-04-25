import getRecommendPercent from './getRecommendPercent.js';

describe('getRecommendPercent', () => {
  it('returns a percentage', () => {
    const recommendCount = '27';
    const totalCount = 100;
    const expectedResult = 27;
    const actualResult = getRecommendPercent(recommendCount, totalCount);

    expect(actualResult).toEqual(expectedResult);
  });
  it('handles undefined input and returns 0', () => {
    const recommendCount = undefined;
    const totalCount = undefined;
    const expectedResult = 0;
    const actualResult = getRecommendPercent(recommendCount, totalCount);

    expect(actualResult).toEqual(expectedResult);
  });
});
