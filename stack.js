class Stack {
    constructor() {
        this.datastore = [];
        this.top = 0;
    }

    push(item) {
        this.datastore.push(item);
        this.top = this.datastore.length;
    }

    pop(){
        --this.top;
        return this.datastore.pop();
    }

    length() {
        return this.datastore.length;
    }

    peek() {
        return this.datastore[this.top-1];
    }

    clear() {
        this.datastore = [];
        this.top = 0;
    }
}

let trays = new Stack();
trays.push('1');
trays.push('2');
trays.push('3');
trays.pop();
console.log(trays.peek());

/**
 * racecar is a palindrome, hello is not
 * @param {string} word 
 */
function isPalindrome(word) {
    let arr = word.split('');
    let stack = new Stack();
    while(arr.length > 0) {
        stack.push(arr.shift())
    }
    let reversedWord = '';
    while(stack.length() > 0) {
        reversedWord += stack.pop();
    }
    console.log(reversedWord);
    if(reversedWord === word) return true;
    return false;
}

console.log(isPalindrome('dad')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('1001')); // true

/**
 * recursion
 * @param {number} n 
 */
function factorial(n) {
    if(n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(5));

/**
 * use stack to implement recursion
 */
function factorialV2(n) {
    let s = new Stack();
    while(n > 1) {
        s.push(n--);
    }
    //s = [4,3,2,1]
    let product = 1;
    while(s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

console.log(factorialV2(5));

