import Stack from './Stack';

describe('DataStructures - Stack', () => {
  it('should create a stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('should push an item to the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  it('should pop an item from the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('should peek the top item from the stack', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('should check if the stack is empty or not', () => {
    const stack = new Stack<number>();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('should throw an error when the capacity is exceeded', () => {
    const stack = new Stack<string>(1);
    stack.push('a');
    expect(() => stack.push('b')).toThrow();
  });
});
