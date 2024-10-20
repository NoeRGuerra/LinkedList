import Node from "Node";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    return;
  }

  append(value) {
    let newTail = Node(value);
    this.tail.nextNode = newTail;
    this.tail = newTail;
  }

  prepend(value) {
    let newHead = Node(value);
    newHead.nextNode = this.head;
    this.head = newHead;
  }

  head() {
    return this.head;
  }

  tail() {
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
