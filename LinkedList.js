import Node from "./Node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newTail = new Node(value);
    if (this.tail) {
      this.tail.nextNode = newTail;
    } else {
      this.head = newTail;
    }
    this.tail = newTail;
  }

  prepend(value) {
    const newHead = new Node(value);
    if (this.head) {
      newHead.nextNode = this.head;
    } else {
      this.tail = newHead;
    }
    this.head = newHead;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    return;
  }

  pop() {
    // Remove last element (find element size-1 with at())
    let oldTail = this.tail;
    let newTail = null; // Define new last element
    // this.tail = newTail
    return oldTail;
  }

  find(value) {
    // Iterate through list until value is found and return index or null if not found
    return;
  }

  toString() {
    // Return string in format ( value ) -> ( value ) -> ( value ) -> null
    return;
  }
}
