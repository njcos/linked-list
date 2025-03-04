import { Node } from "./nodeItem.js";

class ClassList {
  constructor(head = null) {
    this.head = head;
  }

  append(node) {
    let newNode = new Node(node);
    let currentNode = this.head;
    let previousNode;
    if (!this.head) {
      this.head = newNode;
    } else {
      while (currentNode !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      currentNode = newNode;
      previousNode.next = currentNode;
    }
  }

  prepend(node) {
    let newNode = new Node(node);
    let previousNode = this.head;
    newNode.next = previousNode;
    this.head = newNode;
  }

  size() {
    let length = 0;
    let list = this.head;
    while (list !== null) {
      length++;
      let listTemp = list.next;
      list = listTemp;
    }
    console.log(length);
    return length;
  }

  nodeHead() {
    // console.log(this.head);
    return this.head;
  }

  nodeTail() {
    let list = this.head;
    let tail;
    while (list !== null) {
      tail = list;
      list = list.next;
    }
    // console.log(tail);
    return tail;
  }

  nodeIndex(num) {
    let index = 0;
    let list = this.head;
    while (list.head !== null) {
      index++;
      if (num === index) {
        // console.log(list);
        return list;
      }
      list = list.next;
    }
  }

  pop() {
    let thisNode = this.head;
    let previousNode;

    if (thisNode === null) {
      return;
    } else {
      while (thisNode.next !== null) {
        previousNode = thisNode;
        thisNode = thisNode.next;
      }
    }
    previousNode.next = null;
  }

  contain(value) {
    let list = this.head;
    while (list !== null) {
      if (list.data === value) {
        console.log("true");
        return true;
      }
      list = list.next;
    }
    console.log("false");
    return false;
  }

  find(value) {
    let list = this.head;
    let index = 1;
    while (list !== null) {
      if (list.data === value) {
        console.log(index);
        return true;
      }
      index++;
      list = list.next;
    }
    console.log("false");
    return false;
  }

  toString() {
    let list = this.head;
    let str = "";
    while (list !== null) {
      str += `(${list.data}) -> `;
      list = list.next;
    }
    str += "null";
    console.log(str);
    return str;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    let current = this.head;
    let previousNode;
    let i = 0;
    if (current === null && index === 0) {
      this.head = newNode;
    } else if (current === null) {
      return;
    } else {
      while (current !== null) {
        i++;
        previousNode = current;
        current = current.next;
        if (i === index) {
          newNode.next = current;
          previousNode.next = newNode;
          return;
        }
      }
    }
  }

  remove(index) {
    let current = this.head;
    let previousNode;
    let i = 1;
    while (current !== null) {
      i++;
      previousNode = current;
      current = current.next;
      if (i === index && current === null) {
        previousNode.next = null;
      } else if (i === index) {
        previousNode.next = current.next;
      }
    }
  }
}
export { ClassList };
