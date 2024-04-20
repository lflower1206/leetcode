import isValid from './index';

describe('20. Valid Parentheses', () => {
  describe('given input ()', () => {
    it('should return true', () => {
      expect(isValid('()')).toBeTruthy();
    });
  });

  describe('given input ()[]{}', () => {
    it('should return true', () => {
      expect(isValid('()[]{}')).toBeTruthy();
    });
  });

  describe('given input (]', () => {
    it('should return false', () => {
      expect(isValid('(]')).toBeFalsy();
    });
  });

  describe('given input (', () => {
    it('should return false', () => {
      expect(isValid('(')).toBeFalsy();
    });
  });

  describe('given input ((', () => {
    it('should return false', () => {
      expect(isValid('((')).toBeFalsy();
    });
  });
});
