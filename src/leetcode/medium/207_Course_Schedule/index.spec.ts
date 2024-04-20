import canFinish from './index';

describe('207. Course Schedule', () => {
  describe('given input numCourses = 2, prerequisites = [[1,0]]', () => {
    it('should return true', () => {
      expect(canFinish(2, [[0, 1]])).toBeTruthy();
    });
  });

  describe('given input numCourses = 2, prerequisites = [[1,0],[0,1]]', () => {
    it('should return false', () => {
      expect(
        canFinish(2, [
          [1, 0],
          [0, 1],
        ])
      ).toBeFalsy();
    });
  });

  describe('given input numCourses = 1, prerequisites = []', () => {
    it('should return true', () => {
      expect(canFinish(1, [])).toBeTruthy();
    });
  });

  describe('given input numCourses = 5, prerequisites = [[1,4],[2,4],[3,1],[3,2]]', () => {
    it('should return true', () => {
      expect(
        canFinish(5, [
          [1, 4],
          [2, 4],
          [3, 1],
          [3, 2],
        ])
      ).toBeTruthy();
    });
  });
});
