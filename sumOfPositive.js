// function positiveSum(arr) {
//   function filtered() {
//     return arr.filter(function (el) {
//       return el >= 0;
//     });
//   }
//   return filtered().reduce(function (a, b) {
//     return a + b;
//   }, 0);
// }

function positiveSum(arr) {
  return arr
    .filter(num => num >= 0)
    .reduce((a, b) => a + b, 0);
}


console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);