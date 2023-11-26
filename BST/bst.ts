/*

Binary Search Tree!

Name your class Tree. 

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have to keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/
export class Tree {
    root: Node | null;
    nodes: Node[];
    constructor() {
        this.root = null;
        this.nodes = [];
    }

    add(num: number) {
        if (this.root === null) {
            this.root = new Node(num);
            return;
        }
    }

    toObject() {
        return this.root?.serialize() ?? null;
    }
}

class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    serialize() {
        const result = new Node(this.value);
        result.left = this.left === null ? null : this.left.serialize();
        result.right = this.right === null ? null : this.right.serialize();
        return result;
    }
}