function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements this.clear = clear;
    this.find = find;
    this.toString = toString; 
    this.insert = insert; 
    this.append = append; 
    this.remove = remove; 
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next; 
    this.length = length; 
    this.currPos = currPos; 
    this.moveTo = moveTo; 
    this.getElement = getElement; 
    this.length = length; 
    this.contains = contains;

    function find(item) {
        const length = this.dataStore.length;
        for(let i = 0; i < length; i++) {
            if(item === this.dataStore[i]) return i;
        }
        return -1;
    }

    function toString() {
        return this.dataStore;
    }

    function length(){
        return this.dataStore.length;
    }

    function insert(newItem, after){
        const insertIndex = this.find(after);
        if(insertIndex > -1) {
            this.dataStore.splice(insertIndex + 1, 0, newItem);
            ++this.listSize;
            return true;
        }
        return false;
    }

    function append(item) {
        this.dataStore.push(item);
        ++this.listSize;
    }

    function remove(item) {
        const removeIndex = this.find(item);
        if(removeIndex > -1) {
            this.dataStore.splice(removeIndex, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    function clear() {
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    function contains(item) {
        const length = this.length();
        for(let i = 0; i< length; i++) {
            if(this.dataStore[i] === item) return true;
        }
        return false;
    }

    function front(){
        this.pos = 0;
    }

    function end() {
        this.pos = this.listSize -1;
    }

    function prev() {
        if(this.pos > 0) {
            --this.pos;
        }
    }

    function next() {
        if(this.pos < this.listSize) {
            ++this.pos;
        }
    }

    function currPos() {
        return this.pos;
    }

    function moveTo(position) {
        this.pos = position;
    }

    function getElement() {
        return this.dataStore[this.pos];
    }

};

function print(val) {
    console.log(val);
}

var names = new List(); 
names.append("Clayton"); 
names.append("Raymond"); 
names.append("Cynthia"); 
names.append("Jennifer"); 
names.append("Bryan"); 
names.append("Danny");
names.front();
print(names.getElement()); // displays Clayton
print(names.toString());
print(names.currPos());
names.next();
print(names.currPos());
print(names.getElement()); // displays Raymond
names.next();
names.next();
names.prev();
print(names.getElement()); // displays Cynthia

for(names.front(); names.currPos() < names.length(); names.next()) { 
    print(names.getElement());
}

