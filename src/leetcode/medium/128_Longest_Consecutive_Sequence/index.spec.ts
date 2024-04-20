import longestConsecutive from './index';

describe('128. Longest Consecutive Sequence', () => {
  describe('given input [1]', () => {
    it('should return 1', () => {
      expect(longestConsecutive([1])).toEqual(1);
    });
  });

  describe('given input [2,1,3]', () => {
    it('should return 3', () => {
      expect(longestConsecutive([2, 1, 3])).toEqual(3);
    });
  });

  describe('given input [100,4,200,1,3,2]', () => {
    it('should return 4', () => {
      expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4);
    });
  });

  describe('given input [0,3,7,2,5,8,4,6,0,1]', () => {
    it('should return 9', () => {
      expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9);
    });
  });

  describe('given input [1,2,0,1]', () => {
    it('should return 3', () => {
      expect(longestConsecutive([1, 2, 0, 1])).toEqual(3);
    });
  });

  describe('given input [1,0,-1]', () => {
    it('should return 3', () => {
      expect(longestConsecutive([1, 0, -1])).toEqual(3);
    });
  });
});
