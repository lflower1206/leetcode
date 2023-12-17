import addTwoNumber, { ListNode } from './index';

describe('2. Add Two Numbers', () => {
  describe('given l1: null, l2: null', () => {
    it('should return 0', () => {
      expect(addTwoNumber(null, null)).toEqual(null);
    });
  });

  describe('given l1: [0], l2: [0]', () => {
    it('should return 0', () => {
      const givenL1 = new ListNode(0);

      expect(addTwoNumber(givenL1, givenL1)).toEqual(new ListNode(0));
    });
  });

  describe('given l1: [1], l2: [2]', () => {
    it('should return 3', () => {
      const givenL1 = new ListNode(1);
      const givenL2 = new ListNode(2);

      const expectResult = new ListNode(3);

      expect(addTwoNumber(givenL1, givenL2)).toEqual(expectResult);
    });
  });

  describe('given l1: [1, 2], l2: [2, 3]', () => {
    it('should return [3, 5]', () => {
      const givenL1 = new ListNode(1, new ListNode(2));
      const givenL2 = new ListNode(2, new ListNode(3));

      const expectResult = new ListNode(3, new ListNode(5));

      expect(addTwoNumber(givenL1, givenL2)).toEqual(expectResult);
    });
  });

  describe('given l1: [3, 4], l2: [5]', () => {
    it('should return [8, 4]', () => {
      const givenL1 = new ListNode(3, new ListNode(4));
      const givenL2 = new ListNode(5);

      const expectResult = new ListNode(8, new ListNode(4));

      expect(addTwoNumber(givenL1, givenL2)).toEqual(expectResult);
    });
  });

  describe('given l1: [6], l2: [1, 2]', () => {
    it('should return [7, 2]', () => {
      const givenL1 = new ListNode(6);
      const givenL2 = new ListNode(1, new ListNode(2));

      const expectResult = new ListNode(7, new ListNode(2));

      expect(addTwoNumber(givenL1, givenL2)).toEqual(expectResult);
    });
  });

  describe('given l1: [8], l2: [3]', () => {
    it('should return [1, 1]', () => {
      const givenL1 = new ListNode(8);
      const givenL2 = new ListNode(3);

      const expectResult = new ListNode(1, new ListNode(1));

      expect(addTwoNumber(givenL1, givenL2)).toEqual(expectResult);
    });
  });

  describe('given l1: [8], l2: [5, 9]', () => {
    it('should return [3, 0, 1]', () => {
      const givenL1 = new ListNode(8);
      const givenL2 = new ListNode(5, new ListNode(9));

      const expectResult = new ListNode(3, new ListNode(0, new ListNode(1)));

      expect(addTwoNumber(givenL1, givenL2)).toEqual(expectResult);
    });
  });
});
