import findMin from './index';

describe('153. Find Minimum in Rotated Sorted Array', () => {
  describe('given input nums = [3,4,5,1,2]', () => {
    it('should return 1', () => {
      expect(findMin([3, 4, 5, 1, 2])).toBe(1);
    });
  });

  describe('given input nums = [4,5,6,7,0,1,2]', () => {
    it('should return 0', () => {
      expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
    });
  });

  describe('given input nums = [11,13,15,17]', () => {
    it('should return 11', () => {
      expect(findMin([11, 13, 15, 17])).toBe(11);
    });
  });
});
