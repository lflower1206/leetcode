export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const swapPairs = (head: ListNode | null): ListNode | null => {
  if (head === null || head.next === null) {
    return head;
  }

  const dummyHead = new ListNode(0, head);
  let prevPointer = dummyHead;
  let pointer = prevPointer.next;

  while (pointer !== null && pointer?.next !== null) {
    prevPointer.next = pointer.next;
    pointer.next = pointer.next.next;
    prevPointer.next.next = pointer;

    prevPointer = pointer;
    pointer = pointer.next;
  }

  return dummyHead.next;
};

export default swapPairs;
