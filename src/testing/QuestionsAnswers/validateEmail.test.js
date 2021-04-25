import validateEmail from './validateEmail.js'

test('should return true given a valid email', () => {
  expect(validateEmail('coolguy@yahoo.com')).toBe(true);
});

test('should return false given an email with an invalid structure', () => {
  expect(validateEmail('ben@ben@email@email.com.net')).toBe(false);
});

test('should return false given an email with illegal characters', () => {
  expect(validateEmail('b######@gmail.c%m')).toBe(false);
});
