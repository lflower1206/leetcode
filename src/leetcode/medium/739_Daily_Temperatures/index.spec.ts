import dailyTemperatures from './index';

describe('739. Daily Temperatures', () => {
  describe('given input temperatures = [30,60,90]', () => {
    it('should return [1,1,0]', () => {
      expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
    });
  });

  describe('given input temperatures = [73,74,75,71,69,72,76,73]', () => {
    it('should return [1,1,4,2,1,1,0,0]', () => {
      expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
        1, 1, 4, 2, 1, 1, 0, 0,
      ]);
    });
  });
});
