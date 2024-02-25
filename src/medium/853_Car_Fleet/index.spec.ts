import carFleet from './index';

describe('853. Car Fleet', () => {
  describe('given input target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]', () => {
    it('should return 3', () => {
      expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
    });
  });

  describe('given input target = 10, position = [3], speed = [3]', () => {
    it('should return 1', () => {
      expect(carFleet(10, [3], [3])).toBe(1);
    });
  });
});
