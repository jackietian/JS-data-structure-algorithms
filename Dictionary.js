class Dictionary {
    constructor() {
        this.datastore = []; // new Array();
    }

    add(key, value) {
        this.datastore[key] = value;
    }

    find(key) {
        return this.datastore[key];
    }

    remove(key) {
        delete this.datastore[key];
    }

    displayAll() {
        Object.keys(this.datastore).sort().forEach(key => {
            console.log(`${key} ${this.datastore[key]}`);
        })
    }

    count() {
        let n = 0;
        Object.keys(this.datastore).forEach(key => {
            ++n;
        })
        return n;
    }
}

var pbook = new Dictionary(); 
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
// console.log(("David's extension: " + pbook.find("David"))); 
// console.log(pbook.count());
// pbook.remove("David");
// pbook.displayAll();
// console.log(pbook.count());
pbook.displayAll();