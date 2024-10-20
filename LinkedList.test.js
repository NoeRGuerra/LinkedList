const LinkedList = require("./LinkedList.js");

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("should initialize an empty linked list", () => {
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
    expect(list.size()).toBe(0);
  });

  test("should append a value to the list", () => {
    list.append(1);
    expect(list.getHead().value).toBe(1);
    expect(list.getTail().value).toBe(1);
    expect(list.size()).toBe(1);

    list.append(2);
    expect(list.getTail().value).toBe(2);
    expect(list.size()).toBe(2);
  });

  test("should prepend a value to the list", () => {
    list.prepend(1);
    expect(list.getHead().value).toBe(1);
    expect(list.getTail().value).toBe(1);
    expect(list.size()).toBe(1);

    list.prepend(2);
    expect(list.getHead().value).toBe(2);
    expect(list.size()).toBe(2);
  });

  test("should return the correct size of the list", () => {
    expect(list.size()).toBe(0);
    list.append(1);
    expect(list.size()).toBe(1);
    list.append(2);
    expect(list.size()).toBe(2);
    list.prepend(3);
    expect(list.size()).toBe(3);
  });

  test("should get node at specific index", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.at(0).value).toBe(1);
    expect(list.at(1).value).toBe(2);
    expect(list.at(2).value).toBe(3);
  });

  test("should throw error when accessing out of range index", () => {
    expect(() => list.at(0)).toThrow(RangeError);
    list.append(1);
    expect(() => list.at(1)).toThrow(RangeError);
  });

  test("should pop the last element and update tail", () => {
    list.append(1);
    list.append(2);
    const oldTail = list.pop();

    expect(oldTail.value).toBe(2);
    expect(list.getTail().value).toBe(1);
    expect(list.size()).toBe(1);

    list.pop(); // Remove last element
    expect(list.getTail()).toBeNull();
    expect(list.size()).toBe(0);
  });

  test("should find index of a value", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.find(2)).toBe(1);
    expect(list.find(3)).toBe(2);
    expect(list.find(4)).toBeNull;
  });

  test("should return correct string representation", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> null");
  });

  test("should shift the first element from the list", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    const removedElement = list.shift();

    expect(removedElement.value).toBe(1);
    expect(list.getHead().value).toBe(2);
    expect(list.size()).toBe(2);
  });

  test("should return null when shifting from an empty list", () => {
    expect(list.shift()).toBeNull();
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
  });

  test("should insert a value at a specific index", () => {
    list.append(1);
    list.append(3);

    list.insertAt(2, 1); // Insert 2 at index 1

    expect(list.at(1).value).toBe(2);
    expect(list.size()).toBe(3);
  });

  test("should throw an error when inserting at an out-of-bounds index", () => {
    expect(() => list.insertAt(1, -1)).toThrow(RangeError);
    expect(() => list.insertAt(1, 2)).toThrow(RangeError); // Size is 0
  });

  test("should insert at the end when index is equal to the size", () => {
    list.append(1);
    list.insertAt(2, 1); // Insert 2 at the end

    expect(list.getTail().value).toBe(2);
    expect(list.size()).toBe(2);
  });

  test("should remove an element at a specific index", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.removeAt(1); // Remove element at index 1 (value 2)

    expect(list.size()).toBe(2);
    expect(list.at(1).value).toBe(3);
  });

  test("should throw an error when removing from an out-of-bounds index", () => {
    expect(() => list.removeAt(-1)).toThrow(RangeError);
    list.append(1);
    expect(() => list.removeAt(1)).toThrow(RangeError); // Size is 1
  });

  test("should remove the last element when index is size - 1", () => {
    list.append(1);
    list.append(2);

    list.removeAt(1); // Remove last element

    expect(list.size()).toBe(1);
    expect(list.getTail().value).toBe(1);
  });

  test("should remove the first element when index is 0", () => {
    list.append(1);
    list.append(2);

    list.removeAt(0); // Remove first element

    expect(list.size()).toBe(1);
    expect(list.getHead().value).toBe(2);
  });
});
