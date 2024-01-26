/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
      this.size +=1
    }else{
      newNode.next = this.first
      this.first = newNode;
      this.size +=1
    }

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(!this.first){
      throw new Error('Stack is empty!!!')
    }else{
      let rmv = this.first
      this.first = this.first.next
      this.size -=1
      return rmv.val
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if(!this.first){
      throw new Error('Stack is empty!!!')
    }else{
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(!this.first){
      return true
    }else{
      return false
    }
  }
}

module.exports = Stack;
