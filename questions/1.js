/**
 * given a sorted array
 * array A = [1,1,2]
 * remove the duplicates in place
 * return new length
 * return 2, A is now [1,2]
 */

//#1. 
const removeDuplicates = (arr) => {
    // return new Set(arr);
    return Array.from(new Set(arr));
}

// #2. 
const removeDuplicatesV1 = (nums) => [...new Set(nums)];

// #3.
const removeDuplicatesV2 = (nums) => nums.filter((element, index) => nums.indexOf(element) === index);

// #4.
const removeDuplicatesV3 = (nums) => {
    let seen = {};
    return nums.filter((element) => seen.hasOwnProperty(element) ? false : seen[element] = true);
};

// #5. 
const removeDuplicatesV4 = (nums) => {
    let seen = {};
    let out = [];
    for(let i =0; i< nums.length; i++) {
        const el = nums[i];
        if(!(el in seen)) {
            seen[el] = true;
            out.push(el);
        }
    }
    return out;
}

// #6.
const removeDuplicatesV5 = (nums) => {
    if(nums.length === 0) return 0;

    let index = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[index-1]) {
            nums[index++] = nums[i];
        }
    }
    return nums;
}

const nums = [1,1,2,3,4,4];
console.log(removeDuplicates(nums));
console.log(removeDuplicatesV1(nums));
console.log(removeDuplicatesV2(nums));
console.log(removeDuplicatesV3(nums));
console.log(removeDuplicatesV4(nums));
console.log(removeDuplicatesV5(nums));

