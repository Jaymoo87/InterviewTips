/***
 * Implement a (Singly) Linked list data structure.
 * The Linked List needs to have the folowing
 * methods/properties for PART ONE:
 *
 * insert(val)
 * insertEnd(val)
 * insertHead(val)
 * inserAtIndex(val, index)
 * print()
 *
 *
 * PART 2
 * exists(val)
 * destroyFirst()
 * destroyLast(previousNode)
 * destroyBetween(previousNode, node)
 * remove(val)
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head = null;

  insert(val) {
    if (this.isEmpty()) {
      this.head = new ListNode(val);
    } else {
      this.insertEnd(val);
    }
  }

  insertEnd(val) {
    let newNode = new ListNode(val);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  insertHead(val) {
    let newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtIndex(val, index) {
    let previousNode;
    let currentNode = this.head;
    let indexCounter = 0;

    let newNode = new ListNode(val);
    while (indexCounter < index) {
      previousNode = currentNode;
      currentNode = previousNode.next;
      indexCounter++;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      if (currentNode.next === null) {
        result += currentNode.val + " --> Null ";
      } else {
        result += currentNode.val + " --> ";
      }
      currentNode = currentNode.next;
    }
    console.log(result);
  }

  exists(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === val) {
        console.log(val + " has been found");
        return true;
      }
      currentNode = currentNode.next;
    }
    console.log(val + " has not been found");

    return false;
  }

  destroyFirst() {
    let currentNode = this.head;
    this.head = currentNode.next;
  }

  destroyLast(previousNode) {
    previousNode.next = null;
  }

  destroyBetween(previousNode, node) {
    previousNode.next = node.next;
  }

  remove(val) {
    let currentNode = this.head;
    let previousNode = this.head;

    if (!this.isEmpty()) {
      while (currentNode) {
        if (currentNode.val === val) {
          if (currentNode === this.head) {
            this.destroyFirst();
            return;
          } else if (currentNode.next === null) {
            this.destroyLast(previousNode);
            return;
          } else {
            this.destroyBetween(previousNode, currentNode);
            return;
          }
        }

        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }
}

const list = new LinkedList();

list.insert("Scanlan");
list.insert("Grog");
list.insert("Percy");
list.insertHead("Pike");
list.insertAtIndex("Vax", 3);
list.print();
list.remove("Vax");
list.print();
