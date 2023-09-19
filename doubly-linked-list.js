class DoublyLinkedListNode {
  constructor(val, next = null, prev = null) {
    this.value = val;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new DoublyLinkedListNode(val, this.head);
    if (this.head) this.head.prev = newNode;
    this.head = newNode;
    if (this.length === 0) this.tail = this.head;
    this.length++;
  }

  addToTail(val) {
    let current = this.tail;

    if (this.length === 0) {
      this.head = new DoublyLinkedListNode(val)
      this.tail = this.head;
      return;
    }

    const newNode = new DoublyLinkedListNode(val, null, current)
    current.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
