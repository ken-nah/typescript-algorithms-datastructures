interface Stackable<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  isEmpty(): boolean;
}

export default class Stack<T> implements Stackable<T> {
  private storage: T[] = [];

  constructor(private capacity = 1000) {}

  push(item: T) {
    if (this.size() === this.capacity) {
      throw new Error('Stack has reached max capacity, you cannot add more items');
    }
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.size() - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  size() {
    return this.storage.length;
  }
}
