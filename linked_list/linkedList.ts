/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
                      
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

export class LinkedList {
    head: null | Node;
    tail: null | Node;
    length: number;

    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(value: string) {
      const node = new Node(value);
      this.length += 1;
      if (!this.head) {
        this.head = node;
      } else {
        if (this.tail !== null) {
          this.tail.next = node;
        }
      }
      this.tail = node;
    }
    pop() {
      const node = this.delete(this.length - 1);
      return node;
    }
    _find(index: number) {
      if (index >= this.length) return null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current?.next!;
      }
      return current;
    }
    get(index: number) {
      const found = this._find(index);
      if (found === null) return null;
      return this._find(index)?.value;
    }
    delete(index: number) {
      if (index === 0) {
        const head = this.head;
        if (head) {
          this.head = head.next;
        } else {
          this.head = null;
        }
        this.length -= 1;
        return head || null;
      }
      let node = this._find(index - 1);
      if (!node) {
        return null;
      }
      let toRemove = node?.next;
      if (!toRemove) {
        return null;
      }
      node.next = toRemove.next;
      if (!node.next) {
        this.head = toRemove;
      }
      this.length -= 1;
      return toRemove;
    }
  }
  
  class Node {
    value: string;
    next: null | Node;
    constructor(value: string) {
      this.value = value;
      this.next = null;
    }
  }