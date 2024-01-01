import swapPairs, { ListNode } from './index';

describe('24. Swap Nodes in Pairs', () => {
  describe('given head is []', () => {
    it('should return []', () => {
      expect(swapPairs(null)).toBeNull();
    });
  });

  describe('given head is [1]', () => {
    it('should return [1]', () => {
      expect(swapPairs(new ListNode(1))).toEqual(new ListNode(1));
    });
  });

  describe('given head is [1,2,3,4]', () => {
    it('should return [2,1,4,3]', () => {
      expect(
        swapPairs(
          new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
        )
      ).toEqual(
        new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3))))
      );
    });
  });
});
