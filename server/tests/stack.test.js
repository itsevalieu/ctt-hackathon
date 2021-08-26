class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek() {
    return this.items[this.top];
  }
  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }
  pop() {
    let deletedData = this.items[this.top];
    delete this.items[this.top];
    this.top--;

    return deletedData;
  }
}

describe("My Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {
    stack.push("Cats");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("Cats");
  });

  it("can pop off", () => {
    stack.push("Cats");
    const deletedItem = stack.pop();
    expect(deletedItem).toBe("Cats");
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
});
