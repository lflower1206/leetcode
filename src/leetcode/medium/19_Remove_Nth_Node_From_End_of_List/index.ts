export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Input: head = [1,2,3,4,5], n = 2
 *   1   2   3   4   5
 *  f/s
 *   s   f
 *   s       f
 *       s       f
 *           s        f
 * */
const removeNthFromEnd = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  let firstPointer = head;
  let secondPointer = head;

  for (let step = 0; step < n; step++) {
    firstPointer = firstPointer!.next;
  }

  if (!firstPointer) {
    return head!.next;
  }

  while (firstPointer.next) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer!.next;
  }

  secondPointer!.next = secondPointer!.next!.next;

  return head;
};

export default removeNthFromEnd;
