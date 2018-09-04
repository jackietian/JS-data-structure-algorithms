class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    // wrong
    find(element) {
        // loop through every node in the llist
        while(this.head.next !== null) {
            if(this.head.element === element) {
                return true
            }
            this.head = this.head.next;
        }

        return false;
    }

    // correct
    findV1(element) {
        let currNode = this.head;
        while(currNode.element !== element) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(element, after) {
        let newNode = new Node(element);
        let currNode = this.findV1(after);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }

    findPrevious(element) {
        let currNode = this.head;
        while(currNode.next.element !== element && currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    remove(element) {
        let previousNode = this.findPrevious(element);
        if(previousNode.next !== null) {
            previousNode.next = previousNode.next.next;
        }
    }

    display() {
        let currNode = this.head.next;
        while(!(currNode.next === null)) {
            console.log(currNode.element);
            currNode = currNode.next;
        }
        console.log(currNode.element);
    }
}

var cities = new LinkedList(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville"); 
cities.insert("Alma", "Carlisle");
cities.display();
console.log('==============');
cities.remove('Russellville');
cities.display();