function squareSum(numbers){
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.pow(numbers[i], 2);
    }
    sum = numbers.reduce((a, b) => a + b, 0);
    return numbers;
}


console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)