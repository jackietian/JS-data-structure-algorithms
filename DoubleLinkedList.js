class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = new Node('head');
    }

    find(element) {
        let currNode = this.head;
        while(currNode.element !== element) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(element, after) {
        let newNode = new Node(element);
        let prevNode = this.find(after);
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next = newNode;
    }

    remove(element) {
        let currNode = this.find(element);
        if(currNode.next !== null) {
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
            currNode.next = null;
            currNode.prev = null;
        }
    }

    display() {
        let currNode = this.head.next;
        while(currNode !== null) {
            console.log(currNode.element);
            currNode = currNode.next;
        }
    }

    findLast() {
        let currNode = this.head;
        while(currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    displayReverse() {
        let lastNode = this.findLast();
        while(lastNode.element !== 'head') {
            console.log(lastNode.element);
            lastNode = lastNode.prev;
        }
    }
}

var cities = new DoubleLinkedList(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville"); 
cities.insert("Alma", "Carlisle"); 
cities.display();
console.log('============');
// cities.remove("Carlisle");
cities.display();
console.log('============');
cities.displayReverse();