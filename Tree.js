class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(element) {
        let newNode = new Node(element);
        if (this.root === null) {
            // if the tree is empty, then set root to new element
            this.root = newNode;
        } else {
            // if not, traverse the tree
            let currentNode = this.root;

            while (true) {
                console.log('inside while loop ' + element);
                let parent = currentNode;
                if (currentNode.data > element) {
                    console.log(currentNode.show() + ' > ' + element);
                    currentNode = currentNode.left;
                    if (currentNode === null) {
                        parent.left = newNode;
                        break;
                    }
                } else {
                    console.log(currentNode.show() + ' < ' + element);
                    currentNode = currentNode.right;
                    if (currentNode === null) {
                        parent.right = newNode;
                        break;
                    }
                }
            }
        }
    }

    inOrder(node) {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }

    postOrder(node) {
        if(node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }

    preOrder(node) {
        if(node !== null) {
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    getMin() {
        let currentNode = this.root;
        while(currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }

    getMax() {
        let currentNode = this.root;
        while(currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }

    find(data) {
        let currentNode = this.root;
        while(currentNode.data !== data){
            if(currentNode.data > data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }

            if(currentNode === null) {
                return null;
            }
        }
        return currentNode;
    }
}

let nums = new BinarySearchTree();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37); 
nums.insert(3); 
nums.insert(99); 
nums.insert(22);
console.log('======== pre order');
nums.preOrder(nums.root);
console.log('======== in order');
nums.inOrder(nums.root);
console.log('======== post order');
nums.postOrder(nums.root);
console.log('========');
console.log(nums.getMin()); // 3
console.log(nums.getMax()); // 99
console.log('========');
console.log(nums.find(3));
console.log(nums.find(4));
console.log(nums.find(45));
/**
 * Node {
    data: 45,
    left: Node { data: 37, left: null, right: null },
    right: Node { data: 99, left: null, right: null } }
 */

/**
 * Depth First Traversals:
(a) Inorder (Left, Root, Right) : 4 2 5 1 3
(b) Preorder (Root, Left, Right) : 1 2 4 5 3
(c) Postorder (Left, Right, Root) : 4 5 2 3 1

======== pre order
23
16
3
22
45
37
99
======== in order
3
16
22
23
37
45
99
========post order
3
22
16
37
99
45
23

 */