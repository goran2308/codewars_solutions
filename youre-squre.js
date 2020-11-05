var isSquare = function (n) {

  if (Math.sqrt(n) === parseInt(Math.sqrt(n), 10)) {
    return true
  } else {
    return false
  }

}


var isSquare = function (n) {
  let sqr = Math.sqrt(n);
  return (parseInt(sqr, 10) === sqr ? true : false)
}


console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare(0), true, "0 is a square number (0 * 0)");
console.log(isSquare(3), false, "3 is not a square number");
console.log(isSquare(4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "26 is not a square number");