import jump from './index';

describe('45. Jump Game II', () => {
  describe('given input nums = [0]', () => {
    it('should return 0', () => {
      expect(jump([0])).toBe(0);
    });
  });

  describe('given input nums = [1]', () => {
    it('should return 0', () => {
      expect(jump([1])).toBe(0);
    });
  });

  describe('given input nums = [2,3,1,1,4]', () => {
    it('should return 2', () => {
      expect(jump([2, 3, 1, 1, 4])).toBe(2);
    });
  });

  describe('given input nums = [1,2,3]', () => {
    it('should return 2', () => {
      expect(jump([1, 2, 3])).toBe(2);
    });
  });

  describe('given input nums = [1,2]', () => {
    it('should return 1', () => {
      expect(jump([1, 2])).toBe(1);
    });
  });

  describe('given input nums = [1,1,1,1]', () => {
    it('should return 3', () => {
      expect(jump([1, 1, 1, 1])).toBe(3);
    });
  });
});
