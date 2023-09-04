/**
 * Time Complexity O(Size of the LinkedList)
 * space Complexity O(Size of the LinkedList)
 */

//?   Defined Class Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//?   LinkedList Class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

//?   Reverse linked list Between position left to position right
const reverseList = (head) => {
  let newHead = null,
    currentNode = head,
    afterNode = head;

  while (currentNode) {
    afterNode = currentNode.next;
    currentNode.next = newHead;
    newHead = currentNode;
    currentNode = afterNode;
  }
  return newHead;
};

//?   create Linked list based on LinkedList and Node class
const createLinkedList = (values) => {
  let list = new LinkedList();
  for (let value of values) {
    list.add(value);
  }
  let { head } = list;
  let reverse = reverseList(head);
  console.log(reverse);
};

process.stdin.on("data", (data) => {
  let nodeValues = data.toString().trim().split(" ").map(Number);
  createLinkedList(nodeValues);
});
