/**
 * Implement a Stack data structure. The Stack
 * needs to have the following methods:
 *
 * push(item)
 * pop()
 * peek()
 * isEmpty()
 * printStack()
 */

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.items.length === 0) return false;
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printStack() {
    let items = [];
    for (const item of this.items) {
      items += `${item} `;
    }
    return items;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.peek());
