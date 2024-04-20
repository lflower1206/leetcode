import coinChange from './index';

describe('322. Coin Change', () => {
  describe('given input coins = [1,2,5], amount = 11', () => {
    it('should return 3', () => {
      expect(coinChange([1, 2, 5], 11)).toBe(3);
    });
  });

  describe('given input coins = [186,419,83,408], amount = 6249', () => {
    it('should return 20', () => {
      expect(coinChange([186, 419, 83, 408], 6249)).toBe(20);
    });
  });
});
