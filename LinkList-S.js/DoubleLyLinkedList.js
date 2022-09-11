class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoubleLink {
  constructor(node = null) {
    this.head = node;
    this.tail = node;
  }

  printList = () => {
    let printList = [];

    let CurrentNode = this.head;
    while (CurrentNode !== null) {
      printList.push(CurrentNode.data);
      CurrentNode = CurrentNode.next;
    }
    return printList.join(" -> ");
  };

  InsertAtBegg = (data) => {
    let node = new Node(data);
    let currentNode = this.head;
    if (!currentNode) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node; // this operation is optional
      this.head = node;
    }
    return this.head;
  };

  insertAtEnd = function (element) {
    let node = new Node(element);
    let current = this.head;

    if (!current) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  };

  GetIndexOF = (element) => {
    let current = this.head;
    let index = -1;
    while (current != null) {
      if (element === current.data) {
        index++;
        return index;
      }
      index++;
      current = current.next;
    }
    return null;
  };

  AtIndex = (index) => {
    if (index === 0) {
      return this.head;
    }
    let counter = 0;
    let tempNode = this.head;
    while (tempNode) {
      if (counter == index) {
        return tempNode;
      } else {
        counter++;
        tempNode = tempNode.next;
      }
    }
    return null;
  };

  FindLength = () => {
    let tempNode = this.head;
    let length = 0;
    while (tempNode != null) {
      length++;
      tempNode = tempNode.next;
    }
    return length;
  };

  AtPosition = (ele, pos) => {
    let newNode = new Node(ele);
    let current = this.head;

    for (let i = 0; i < pos - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next.prev = newNode;
    current.next = newNode;
    newNode.prev = current;
    return this.head;
  };

  DelAtBeg = () => {
    let temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.head.prev = null;
  };

  DelAtEnd = () => {
    let temp = this.tail;
    this.tail = temp.prev;
    temp.prev = null;
    this.tail.next = null;
  };

  DeleteAtPos = (ele) => {
    let temp = this.head;
    for (let i = 0; i < ele - 1; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
    temp.next.prev = temp;
  };
}

let node1 = new Node(23);
// let node2 = new Node(25);
// let node3 = new Node(27);
// let node4 = new Node(29);
// let node5 = new Node(32);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

let list = new DoubleLink(node1);
console.log(list.printList());

list.InsertAtBegg(300);
list.InsertAtBegg(200);
list.InsertAtBegg(100);

console.log("After Inserting the Start Node = ", list.printList());

list.insertAtEnd(500);
list.insertAtEnd(600);
list.insertAtEnd(700);

console.log(list.printList());

let IndexGiven = list.GetIndexOF(200);
console.log("INdex At Given Elem = ", IndexGiven);

let GivenINdex = list.AtIndex(3);
console.log("Elem At Given Index = ", GivenINdex.data);

console.log("Length of the List = ", list.FindLength());

list.AtPosition(309, 3);
console.log(list.printList());

list.DelAtBeg();
console.log("After Deleting First Element =", list.printList());

list.DelAtEnd();
console.log("After deleteing last element =", list.printList());

list.DeleteAtPos(2);
console.log(list.printList());

/**
 * ============output===============================
 * 23
After Inserting the Start Node =  100 -> 200 -> 300 -> 23
100 -> 200 -> 300 -> 23 -> 500 -> 600 -> 700
INdex At Given Elem =  1
Elem At Given Index =  23
Length of the List =  7
100 -> 200 -> 300 -> 309 -> 23 -> 500 -> 600 -> 700
After Deleting First Element = 200 -> 300 -> 309 -> 23 -> 500 -> 600 -> 700
After deleteing last element = 200 -> 300 -> 309 -> 23 -> 500 -> 600
200 -> 300 -> 23 -> 500 -> 600
 */
