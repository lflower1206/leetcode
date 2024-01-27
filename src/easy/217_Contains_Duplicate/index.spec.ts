import containsDuplicate from './index';

describe('217. Contains Duplicate', () => {
  describe('given input nums = [1]', () => {
    it('should return true', () => {
      expect(containsDuplicate([1])).toBeFalsy();
    });
  });

  describe('given input nums = [2,2]', () => {
    it('should return true', () => {
      expect(containsDuplicate([2, 2])).toBeTruthy();
    });
  });

  describe('given input nums = [1,2,3,1]', () => {
    it('should return true', () => {
      expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
    });
  });
});
