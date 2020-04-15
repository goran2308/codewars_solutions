function squareArea(A){
    r = (A * 4) / (Math.PI * 2);
    area =  Math.pow(r, 2).toFixed(2);
    return Math.round(area * 100)/100;
}

console.log(squareArea(2), 1.62);
console.log(squareArea(0), 0);
console.log(squareArea(14.05), 80);