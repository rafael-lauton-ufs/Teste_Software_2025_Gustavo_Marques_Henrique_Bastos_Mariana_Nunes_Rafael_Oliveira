import { throwBasedOnInput, CustomError, AnotherError } from './errorThrower';

describe('throwBasedOnInput', () => {
  test('should throw CustomError for "custom" input', () => {
    try {
      throwBasedOnInput('custom');
    } catch (err) {
      expect(err).toBeInstanceOf(CustomError);
      expect(err).toHaveProperty('message', 'This is a custom error');
    }
  });

  test('should throw AnotherError for "another" input', () => {
    try {
      throwBasedOnInput('another');
    } catch (err) {
      expect(err).toBeInstanceOf(AnotherError);
      expect(err).toHaveProperty('message', 'This is another error');
    }
  });

  test('should throw generic Error for unknown input', () => {
    try {
      throwBasedOnInput('unknown');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err).not.toBeInstanceOf(CustomError);
      expect(err).not.toBeInstanceOf(AnotherError);
      expect(err).toHaveProperty('message', 'Generic error');
    }
  });
});
