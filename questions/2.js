
/**
 * 4: 1211
 * 5: 111221
 * 6: 312211
 * @param {*} n 
 */
var countAndSay = function (n) {
  if (n <= 0) return '';

  let str = '1';

  // count the ocurrences
  for (let i = 2; i <= n; i++) {
    let temp = '';
    let prev = str.charAt(0);
    let counter = 1;
    for(let j = 1; j < str.length ; j++) {
      let char = str.charAt(j);
      if(char !== prev) {
        temp = temp + counter.toString() + prev.toString();
        counter = 1;
        prev = char;
      } else {
        counter++;
      }
    }
    temp = temp + counter.toString() + prev.toString();
    str = temp;
  }
  return str;
};

console.log(countAndSay(1)); //1
console.log(countAndSay(2)); //11
console.log(countAndSay(3)); //21
console.log(countAndSay(4)); //1211
console.log(countAndSay(5)); //111221
console.log(countAndSay(6)); //312211