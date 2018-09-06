class Set {
    constructor() {
        this.datastore = [];
    }

    has(element) {
        return this.datastore.indexOf(element) > -1;
    }

    add(element) {
        if(!this.has(element)) {
            this.datastore.push(element);
        }
    }

    remove(element) {
        if(this.has(element)) {
            let index = this.datastore.indexOf(element);
            this.datastore.splice(index, 1);
        }
    }

    showAll() {
        console.log(this.datastore.join(''));
    }
}

let s = new Set();
s.add(1);
s.add(2);
s.add(2);
s.add(3);
s.add(4);
s.showAll();