class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // 1-- To print the list

  PrintListt = function () {
    let printList = [];

    // pointer points to head node

    let currentNode = this.head;
    while (currentNode !== null) {
      printList.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return printList.join(" -> ");
  };

  //2-- For finding the size----
  sizee = function () {
    let count = 0;
    let currentnode = this.head;

    while (currentnode !== null) {
      count++;
      currentnode = currentnode.next;
    }
    return count;
  };

  //3-- To getr the first element
  getFIrstt = function () {
    return this.head;
  };

  //4-- Tp get the Last element
  getLastt = () => {
    let tempNodee = this.head;
    // if(tempNodee){
    while (tempNodee.next) {
      tempNodee = tempNodee.next;
    }
    // }
    return tempNodee;
  };

  //5-- To clear the list
  clearListt = () => {
    this.head = null;
  };

  //6-- To Add at the beginning

  insertAt_Beginning = function (data) {
    // A newNode object is created with property data and next = null
    let newNode = new Node(data);
    // The pointer next is assigned head pointer so that both pointers now point at the same node.
    newNode.next = this.head;
    // As we are inserting at the beginning the head pointer needs to now point at the newNode.
    this.head = newNode;
    return this.head;
  };

  //7-- To Add Element at the end
  InsertAt_End = (data) => {
    let newNode = new Node(data);

    // if the List in null the inserted node is placed 1st
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
  };

  //8-- To get the given index element
  getAtt = (index) => {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  };

  //9 -- insert At position

  insertAtPos = (data, index) => {
    //if empty list is null
    if (!this.head) {
      this.head = new Node(data);
      return this.head;
    }
    /**
     *  if new node needs to be inserted at the front
     *  of the list i.e. before the head. */

    if (index == 0) {
      this.head = new Node(data, this.head);
      return this.head;
    }

    const previous = this.getAtt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    return this.head;
  };

  //--2--for insert at positin
  insertFirstt(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  insertAtt(data, index) {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirstt(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //9-- Dlete First Node

  deleteFirsttNode = () => {
    if (!this.head) {
      return this.head;
    }
    this.head = this.head.next;
    return this.head;
  };

  //10-- Delte Last Node

  deleteLasttNode = () => {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      return (this.head = null);
    }

    let previous = this.head;
    let tail = previous.next; // this.head.next

    while (tail.next !== null) {
      previous = tail;
      tail = tail.next;
    }

    previous.next = null;
    return this.head;
  };

  // 11-- Delete the value at element

  DeleAtt = (index) => {
    //if empty retun null
    if (!this.head) {
      return null;
    }
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    // node needs to be deleted from
    //the front of the list i.e. before the head.
    if (index === 0) {
      this.head = current.next;
      return;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    return;
  };
}
let node1 = new Node(23);
let node2 = new Node(25);
let node3 = new Node(27);
let node4 = new Node(29);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let listt = new LinkedList(node1);

console.log(listt.PrintListt());

console.log("size = ", listt.sizee());

let firstNode = listt.getFIrstt();
console.log("First Elemnt = ", firstNode.data);

let LastNode = listt.getLastt();
console.log("Last Element = ", LastNode.data);

let first_ele = listt.insertAt_Beginning(100);
console.log("Inserted aat the begining == ", first_ele.data);
console.log("Inserted aat the begining == ", listt.PrintListt());

listt.InsertAt_End(200);
// console.log("Inserted aat the End == ",last_ele.data)
console.log("Inserted at the End == ", listt.PrintListt());

let indexnode = listt.getAtt(3);
console.log("The index elem of 3 = ", indexnode.data);

listt.insertAtPos(500, 3);
console.log(listt.PrintListt());

listt.deleteFirsttNode();
console.log("After Deleting the first node =", listt.PrintListt());

listt.deleteLasttNode();
console.log("Deleted last node = ", listt.PrintListt());

listt.DeleAtt(2);
console.log(listt.PrintListt());

// let removeList = listt.clearListt();
// console.log("List Cleared = ", removeList);
