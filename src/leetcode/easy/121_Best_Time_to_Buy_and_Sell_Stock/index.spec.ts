import maxProfit from './index';

describe('121. Best Time to Buy and Sell Stock', () => {
  describe('given input prices = [7,1,5,3,6,4]', () => {
    it('should return 5', () => {
      expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });
  });

  describe('given input prices = [7,6,4,3,1]', () => {
    it('should return 0', () => {
      expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });
  });

  describe('given input prices = [2, 1, 2, 1, 0, 1, 2]', () => {
    it('should return 2', () => {
      expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toBe(2);
    });
  });
});
