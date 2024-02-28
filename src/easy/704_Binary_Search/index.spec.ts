import search from './index';

describe('704. Binary Search', () => {
  describe('given input nums = [-1,0,3,5,9,12], target = 9', () => {
    it('should return 4', () => {
      expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
    });
  });

  describe('given input nums = [-1,0,3,5,9,12], target = 2', () => {
    it('should return -1', () => {
      expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
    });
  });

  describe('given input nums = [5], target = 5', () => {
    it('should return 0', () => {
      expect(search([5], 5)).toBe(0);
    });
  });
});
