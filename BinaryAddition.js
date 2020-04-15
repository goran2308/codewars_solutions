function addBinary(a,b) {
  var sum = a + b;
  var binary = '';
    while ( sum > 0 ) {
      binary = ( sum % 2 ) + binary;
      sum = Math.floor( sum / 2 );
  }
  return binary;
}

function addBinary(a,b) {return ((a + b) >>> 0).toString(2);}

console.log(addBinary(51,12));

