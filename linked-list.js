class LinkedListNode {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    this.head = new LinkedListNode(val, this.head)
    this.length++;

  }

  addToTail(val) {

    let current = this.head;
    let count = 0;

    if (this.length === 0) this.head = new LinkedListNode(val);

    while (count < this.length) {
      if (current.next === null) current.next = new LinkedListNode(val);
      current = current.next;
      count++;
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;s
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
