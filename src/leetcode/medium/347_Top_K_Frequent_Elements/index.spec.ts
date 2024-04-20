import topKFrequent from './index';

describe('347. Top K Frequent Elements', () => {
  describe('given input nums = [1], k = 1', () => {
    it('should return [1]', () => {
      expect(topKFrequent([1], 1)).toEqual([1]);
    });
  });

  describe('given input nums = [1,1,1,2,2,3], k = 2', () => {
    it('should return [1,2]', () => {
      expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    });
  });
});
