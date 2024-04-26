import findOrder from './index';

describe('210. Course Schedule II', () => {
  describe('given input numCourses = 2, prerequisites = [[1,0]]', () => {
    it('should return [0,1]', () => {
      expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
    });
  });

  describe('given input numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]', () => {
    it('should return [0,1,2,3]', () => {
      expect(
        findOrder(4, [
          [1, 0],
          [2, 0],
          [3, 1],
          [3, 2],
        ])
      ).toEqual([0, 1, 2, 3]);
    });
  });

  describe('given input numCourses = 1, prerequisites = []', () => {
    it('should return [0]', () => {
      expect(findOrder(1, [])).toEqual([0]);
    });
  });

  describe('given input numCourses = 2, prerequisites = []', () => {
    it('should return [0,1]', () => {
      expect(findOrder(2, [])).toEqual([0, 1]);
    });
  });

  describe('given input numCourses = 3, prerequisites = [[1,0]]', () => {
    it('should return [0,1,2]', () => {
      expect(findOrder(3, [[1, 0]])).toEqual([0, 1, 2]);
    });
  });

  describe('given input numCourses = 2, prerequisites = [[0,1],[1,0]]', () => {
    it('should return []', () => {
      expect(
        findOrder(2, [
          [0, 1],
          [1, 0],
        ])
      ).toEqual([]);
    });
  });

  describe('given input numCourses = 3, prerequisites = [[1,0],[2,0]]', () => {
    it('should return [0,1,2]', () => {
      expect(
        findOrder(3, [
          [1, 0],
          [2, 0],
        ])
      ).toEqual([0, 1, 2]);
    });
  });
});
