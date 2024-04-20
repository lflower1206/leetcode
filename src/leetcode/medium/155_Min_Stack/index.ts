class MinStack {
  private stack: number[];
  private min: number;
  constructor() {
    this.stack = [];
    this.min = Number.MAX_SAFE_INTEGER;
  }

  push(val: number): void {
    if (val <= this.min) {
      // push current min to the stack before val
      this.stack.push(this.min);
      this.min = val;
    }

    this.stack.push(val);
  }

  pop(): void {
    if (this.stack.pop() === this.min) {
      // if the pop value is equal to min it means the previous one is the new min value
      this.min = this.stack.pop()!;
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}

export default MinStack;
