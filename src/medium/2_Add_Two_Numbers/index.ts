export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  if (l1 === null && l2 === null) {
    return null;
  }

  const root = new ListNode();
  const defaultListNode = new ListNode();
  let tail = root;
  let carry = 0;
  let currentL1 = l1;
  let currentL2 = l2;

  while (carry > 0 || currentL1 !== null || currentL2 !== null) {
    currentL1 = currentL1 ?? defaultListNode;
    currentL2 = currentL2 ?? defaultListNode;

    const value = currentL1.val + currentL2.val + carry;
    const hasCarry = value > 9;

    carry = hasCarry ? 1 : 0;
    tail = tail.next = new ListNode(hasCarry ? value % 10 : value);
    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
  }

  return root.next;
};

export default addTwoNumbers;
