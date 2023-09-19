const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

let ll = new LinkedList();
let dll = new DoublyLinkedList();

console.log('all tests on a million elements')
console.log('Single linked addToHead')
let dateStart01 = Date.now();
for (let i = 0; i < 100000; i++) {
    ll.addToHead(i);
}
let dateEnd01 = Date.now();
console.log(`Time elapsed: ${dateEnd01 - dateStart01} ms`);

console.log('Single linked addToTail')
let dateStart02 = Date.now();
for (let i = 0; i < 100000; i++) {
    ll.addToTail(i);
}
let dateEnd02 = Date.now();
console.log(`Time elapsed: ${dateEnd02 - dateStart02} ms`);
console.log('Doubly linked addToHead')
let dateStart03 = Date.now();
for (let i = 0; i < 100000; i++) {
    dll.addToHead(i);
}
let dateEnd03 = Date.now();
console.log(`Time elapsed: ${dateEnd03 - dateStart03} ms`);
console.log('Doubly linked addToTail')
let dateStart04 = Date.now();
for (let i = 0; i < 100000; i++) {
    dll.addToTail(i);
}
let dateEnd04 = Date.now();
console.log(`Time elapsed: ${dateEnd04 - dateStart04} ms`);
