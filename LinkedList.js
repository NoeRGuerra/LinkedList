const Node = require("./Node.js");

class LinkedList {
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

  size() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      counter += 1;
      currentNode = currentNode.nextNode;
    }
    return counter;
  }

  at(index) {
    if (index >= this.size()) {
      throw RangeError("Index out of range");
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.nextNode;
      counter += 1;
    }
    return currentNode;
  }

  pop() {
    let oldTail = this.tail;
    let newTail;
    let newLastIndex = this.size() - 2;
    if (newLastIndex < 0) {
      newTail = null;
      this.head = newTail;
    } else {
      newTail = this.at(newLastIndex); // Define second to last node as new tail
      newTail.nextNode = null;
    }
    this.tail = newTail;
    return oldTail;
  }

  shift() {
    let oldHead = this.head;
    if (oldHead === null) {
      return null;
    }
    let newHead = oldHead.nextNode;
    if (newHead === null || newHead.nextNode === null) {
      this.tail = newHead;
    }
    this.head = newHead;
    return oldHead;
  }

  find(value) {
    // Iterate through list until value is found and return index or null if not found
    let currentNode = this.head;
    let counter = -1;
    while (currentNode != null) {
      counter += 1;
      if (value === currentNode.value) {
        break;
      }
      currentNode = currentNode.nextNode;
    }
    if (counter < 0) {
      return null;
    }
    return counter;
  }

  toString() {
    // Return string in format ( value ) -> ( value ) -> ( value ) -> null
    let stringRepr = "";
    let currentNode = this.head;
    while (currentNode != null) {
      let valueStr = `( ${currentNode.value} ) -> `;
      stringRepr = stringRepr + valueStr;
      currentNode = currentNode.nextNode;
    }
    stringRepr = stringRepr + "null";
    return stringRepr;
  }

  insertAt(value, index) {
    // Insert value at index.
    if (index < 0 || index > this.size()) {
      throw RangeError(
        `Index out of range: must be between 0 and [${this.size}].`
      );
    }
    if (index === this.size()) {
      this.append(value);
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      const previousNode = this.at(index - 1);
      const followingNode = this.at(index);
      previousNode.nextNode = newNode;
      newNode.nextNode = followingNode;
    }
    return;
  }

  removeAt(index) {
    if (index < 0 || index > this.size() - 1) {
      throw RangeError(
        `Index out of range: must be between 0 and [${this.size - 1}].`
      );
    }
    if (index === this.size() - 1) {
      this.pop();
    } else if (index === 0) {
      this.shift();
    } else {
      const previousNode = this.at(index - 1);
      const followingNode = this.at(index + 1);
      previousNode.nextNode = followingNode;
    }
    return;
  }
}

module.exports = LinkedList;
