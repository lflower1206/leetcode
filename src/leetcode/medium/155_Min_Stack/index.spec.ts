import MinStack from './index';

describe('155. Min Stack', () => {
  describe('given input ["MinStack","push","push","push","getMin","pop","top","getMin"], [[],[-2],[0],[-3],[],[],[],[]]', () => {
    it('should return [null,null,null,null,-3,null,0,-2]', () => {
      const minStack = new MinStack();

      minStack.push(-2);
      minStack.push(0);
      minStack.push(-3);

      expect(minStack.getMin()).toEqual(-3); // return -3

      minStack.pop();

      expect(minStack.top()).toEqual(0); // return 0
      expect(minStack.getMin()).toEqual(-2); // return -2
    });
  });

  describe('given input ["MinStack","push","push","push","getMin","pop","getMin"], [[],[0],[1],[0],[],[],[]]', () => {
    it('should return [null,null,null,null,0,null,0]', () => {
      const minStack = new MinStack();

      minStack.push(0);
      minStack.push(1);
      minStack.push(0);

      expect(minStack.getMin()).toEqual(0); // return -3

      minStack.pop();

      expect(minStack.getMin()).toEqual(0); // return -2
    });
  });
});
