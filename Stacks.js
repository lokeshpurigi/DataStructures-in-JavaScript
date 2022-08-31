class Stack {
  constructor() {
    this.items = [];
  }

  add(element) {
    return this.items.push(element);
  }

  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    } else {
      console.log("Empty Stack.");
    }
  }

  peek() {
    //We cant use round brackets
    // let topIndex = this.items(this.items.length - 1);

    let topIndex = this.items[this.items.length - 1];
    console.log(topIndex);
  }

  isEmpty() {
    return this.items.length == 0;
  }

  Size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

let obj = new Stack();
obj.add(5);
obj.add(6);
obj.add(8);
obj.add(7);
obj.add(1);
obj.add(2);

console.log(obj.items);
obj.remove();
console.log(obj.items);
obj.peek();
console.log(obj.isEmpty());
console.log(obj.Size());

obj.clear();
console.log(obj.items);

console.log(obj.isEmpty());
