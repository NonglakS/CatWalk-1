import buildStars from './buildStars.js';

describe('buildStars', () => {
  it('builds an array of booleans of length 5', () => {
    const rating = 3;
    const actualArray = buildStars(rating);
    const expectedArray = [true, true, true, false, false];

    expect(actualArray.length).toEqual(5);
    expect(actualArray).toEqual(expectedArray);
  });
  it('builds an array of all false when rating is 0', () => {
    const rating = 0;
    const actualArray = buildStars(rating);
    const expectedArray = [false, false, false, false, false];

    expect(actualArray.length).toEqual(5);
    expect(actualArray).toEqual(expectedArray);
  });
});