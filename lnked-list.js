class LinkedList {
  constructor() {
    this.firstNode = null;
  }

  append(value) {
    if (this.firstNode === null) {
      this.firstNode = new Node(value);
      return;
    }

    let currentNode = this.firstNode;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value);
  }

  prepend(value) {
    let temp = new Node(value);
    temp.next = this.firstNode;
    this.firstNode = temp;
  }

  size() {
    if (this.firstNode === null) {
      return 0;
    }
    let currentNode = this.firstNode;
    let counter = 1;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      counter++;
    }
    return counter;
  }

  head() {
    if (this.firstNode === null) {
      return null;
    }
    return this.firstNode.value;
  }

  tail() {
    if (this.firstNode === null) {
      return null;
    }
    let currentNode = this.firstNode;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  at(index) {
    if (this.firstNode === null) {
      return null;
    }
    let currentNode = this.firstNode;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return null;
      }
    }
    return currentNode.value;
  }

  pop() {
    if (this.firstNode === null) {
      return;
    } else if (this.firstNode.next === null) {
      let tmp = this.firstNode;
      this.firstNode = null;
      return tmp;
    }
    let currentNode = this.firstNode;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    let tmp = currentNode.next;
    currentNode.next = null;
    return tmp;
  }

  contains(value) {
    if (this.firstNode === null) {
      return false;
    }
    let currentNode = this.firstNode;
    if (currentNode.value === value) {
      return true;
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        return true;
      }
    }
    return false;
  }

  find(value) {
    if (this.firstNode === null) {
      return null;
    }

    let currentNode = this.firstNode;
    if (currentNode.value === value) {
      return 0;
    }
    let counter = 0;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      counter++;
      if (currentNode.value === value) {
        return counter;
      }
    }
    return null;
  }

  toString() {
    let returnString = "";

    if (this.firstNode === null) {
      returnString += " -> null";
      return returnString;
    }

    let currentNode = this.firstNode;

    returnString += `(${currentNode.value}) -> `;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      returnString += `(${currentNode.value}) -> `;
    }
    returnString += "null";
    return returnString;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.append(3);
myLinkedList.append(2);
myLinkedList.append(33);
myLinkedList.prepend(3);
console.log("linked list: ", myLinkedList.toString());
console.log("size: ", myLinkedList.size());
console.log("first node: ", myLinkedList.head());
console.log("last node: ", myLinkedList.tail());
console.log("third node: ", myLinkedList.at(2));
myLinkedList.pop();
console.log("linked list after poping last node: ", myLinkedList.toString());
console.log("check if it contains 1: ", myLinkedList.contains(1));
console.log("check if it contains 10: ", myLinkedList.contains(10));
console.log("index of 2: ", myLinkedList.find(2));
