class CArray {
    constructor(total) {
        this.datastore = [];
        this.pos = 0;
        this.total = total;
    }

    setData() {
        for (let i = 0; i < this.total; i++) {
            this.datastore[i] = Math.floor(Math.random() * (this.total + 1));
        }
    }

    clear() {
        for (let i = 0; i < this.total; i++) {
            this.datastore[i] = 0;
        }
    }

    insert(element) {
        this.datastore.push(element);
    }

    toString() {
        let str = '';
        this.datastore.forEach((item, i) => {
            str += this.datastore[i] + ' ';
            if (i > 0 && i % 10 === 0) {
                str += '\n';
            }
        });
        console.log(str);
    }

    swap(i, j) {
        const temp = this.datastore[i];
        this.datastore[i] = this.datastore[j];
        this.datastore[j] = temp;
    }

    selectionSort() {
        for (let i = 0; i < this.datastore.length; i++) {
            for (let j = i; j < this.datastore.length; j++) {
                if (this.datastore[i] > this.datastore[j]) {
                    this.swap(i, j);
                }
            }
        }
    }
}

const arr = new CArray(100);
arr.setData();
arr.toString();
// arr.selectionSort();
console.log('========');



/**
 * merge sort by recursion
 * @param {Array} arr 
 */
function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let results = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return results.concat(left).concat(right);
}

const sortedArr = mergeSort(arr.datastore);
console.log(sortedArr.join(' '));