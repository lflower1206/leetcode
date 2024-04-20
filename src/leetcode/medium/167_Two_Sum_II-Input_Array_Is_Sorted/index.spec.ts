import twoSum from './index';

describe('167. Two Sum II - Input Array Is Sorted', () => {
  describe('given input numbers = [2,7,11,15], target = 9', () => {
    it('should return [1,2]', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });
  });

  describe('given input numbers = [2,3,4], target = 6', () => {
    it('should return [1,3]', () => {
      expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    });
  });

  describe('given input numbers = [-1,0], target = -1', () => {
    it('should return [1,2]', () => {
      expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
    });
  });
});
