import removeNthFromEnd, { ListNode } from './index';

describe('19. Remove Nth Node From End of List', () => {
  describe('given head = [1], n = 1', () => {
    it('should return []', () => {
      expect(removeNthFromEnd(new ListNode(1), 1)).toEqual(null);
    });
  });

  describe('given head = [1,2], n = 1', () => {
    it('should return [1]', () => {
      expect(removeNthFromEnd(new ListNode(1, new ListNode(2)), 1)).toEqual(
        new ListNode(1)
      );
    });
  });

  describe('given head = [1,2,3,4,5], n = 2', () => {
    it('should return [1,2,3,5]', () => {
      expect(
        removeNthFromEnd(
          new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
          ),
          2
        )
      ).toEqual(
        new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))))
      );
    });
  });
});
