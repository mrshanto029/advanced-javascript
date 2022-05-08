const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const part = nums.slice(2, 4);
// console.log(part);
// console.log(nums);
const removed = nums.splice(2, 4, 56, 7357, 8765);
console.log(removed);
console.log(nums);

const together = nums.join(",");
console.log(together);