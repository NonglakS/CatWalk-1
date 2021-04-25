import makeAverageStars from './makeAverageStars';

describe('makeAverageStars', () => {
  it('returns handles whole number scores', () => {
    const score = 4;

    const expectedArr = [1,1,1,1,0];
    const actualArr = makeAverageStars(score);

    expect(actualArr.length).toEqual(5);
    expect(actualArr).toEqual(expectedArr);
  });
  it('returns handles fractional number scores', () => {
    const score = 3.7;

    const expectedArr = [1,1,1,2,0];
    const actualArr = makeAverageStars(score);

    expect(actualArr.length).toEqual(5);
    expect(actualArr).toEqual(expectedArr);
  });
  it('returns an array of 0s when score is 0', () => {
    const score = 0;

    const expectedArr = [0,0,0,0,0];
    const actualArr = makeAverageStars(score);

    expect(actualArr.length).toEqual(5);
    expect(actualArr).toEqual(expectedArr);
  });
  it('returns an array of 0s when there are no reviews', () => {
    const score = undefined;

    const expectedArr = [0,0,0,0,0];
    const actualArr = makeAverageStars(score);

    expect(actualArr.length).toEqual(5);
    expect(actualArr).toEqual(expectedArr);
  });
});
