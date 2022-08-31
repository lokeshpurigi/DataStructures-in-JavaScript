class StackNode {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}
// Define a custom stack
class MyStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  // Add node at the top of stack
  push(element) {
    this.top = new StackNode(element, this.top);
    this.size++;
  }
  isEmpty() {
    if (this.size > 0 && this.top != null) {
      return false;
    } else {
      return true;
    }
  }
  // Remove top element of stack
  pop() {
    if (this.size > 0 && this.top != null) {
      var temp = this.top;
      // Change top element of stack
      this.top = temp.next;
      this.size--;
    }
  }
  // Return top element of stack
  peek() {
    return this.top.element;
  }
}
class ReverseString {
  // Reverse the string element
  reverse(text) {
    var size = text.length;
    // Auxiliary variable which is used to store result of string
    var result = "";
    // Create an stack
    var stack = new MyStack();
    // Add element into stack
    for (var i = 0; i < size; i++) {
      // Add element into stack
      stack.push(text.charAt(i));
    }
    // iterating the stack elements until if not empty
    while (stack.isEmpty() == false) {
      // Get top element
      result += stack.peek();
      // Remove current top
      stack.pop();
    }
    return result;
  }
}

function done() {
  var task = new ReverseString();
  var text = "Lokesh";

  console.log(" Before Reverse : [" + text + "]");
  text = task.reverse(text);
  console.log("\n After Reverse : " + text);
}
done();
