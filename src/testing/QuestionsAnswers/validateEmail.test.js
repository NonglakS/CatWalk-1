import validateEmail from './validateEmail.js'

test('should return valid email', () => {
  expect(validateEmail('coolguy@yahoo.com')).toBe(true)
});

test('should return invalid email', () => {
  expect(validateEmail('afsd@*jkfj2##')).toBe(false)
});