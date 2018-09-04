class Queue {
    constructor() {
        this.datastore = [];
        this.top = 0;
    }

    enqueue(element) {
        this.datastore.push(element);
    }

    dequeue() {
        this.datastore.shift();
    }

    empty() {
        this.datastore = [];
    }

    toString() {
        let result = '';
        this.datastore.forEach(item => {
            result = `${result} ${item}`;
        });
        return result;
    }
}

let q = new Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
/**
 * [1,2,3,4]
 * [2,3,1,4]
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function compareTwoArray(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    for(let i = 0; i < arr1.length; i++) {
        if(arr2.indexOf(arr1[i]) <= -1) {
            console.log('not found');
            return false;
        }
    }

    return true;
}

console.log(compareTwoArray([1,2,3,4], [2,3,1,4]));