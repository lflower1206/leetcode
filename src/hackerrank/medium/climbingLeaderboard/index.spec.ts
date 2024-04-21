import climbingLeaderboard from './index';

describe('Climbing The Leaderboard', () => {
  describe('given input ranked = [100, 100, 50, 40, 40, 20, 10], player = [5, 25, 50, 120]', () => {
    it('should return [6, 4, 2, 1]', () => {
      expect(
        climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
      ).toEqual([6, 4, 2, 1]);
    });
  });

  describe('given input ranked = [100, 90, 90, 80, 75, 60], player = [50, 65, 77, 90, 102]', () => {
    it('should return [6, 5, 4, 2, 1]', () => {
      expect(
        climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
      ).toEqual([6, 5, 4, 2, 1]);
    });
  });

  describe('given input ranked = [100, 100, 50, 40, 40, 20, 10], player = [5, 7, 25, 50, 100, 120, 130]', () => {
    it('should return [6, 6, 2, 1, 1, 1]', () => {
      expect(
        climbingLeaderboard(
          [100, 100, 50, 40, 40, 20, 10],
          [5, 7, 25, 50, 100, 120, 130]
        )
      ).toEqual([6, 6, 4, 2, 1, 1, 1]);
    });
  });
});
