/*class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail

  add(number) {
    // your code here
  }

  get(index) {
    // your code here
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
*/

class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}
class LinkedList {
  // setup head and tail
  constructor() {
    this.head = null;
    this.length = 0;
  }
  add(number) {
    // your code here
    let node = new Node(number);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next_node) {
        current = current.next_node;
      }
      current.next_node = node;
    }
    this.length++;
  }
  get(index) {
    // your code here
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next_node;
    }
    return current.value;
  }
}
const list = new LinkedList();
list.add(3);
list.add(5);
console.log(list);
console.log(list.get(1));
// => 5
module.exports = LinkedList;