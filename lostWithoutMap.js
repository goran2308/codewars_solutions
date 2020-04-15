function generateRange(min, max, step) {
    for (min; max; min++) {
      return step + min;
    }
}

console.log(generateRange(2, 10, 2));