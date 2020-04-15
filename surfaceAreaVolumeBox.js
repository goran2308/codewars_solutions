function getSize(width, height, depth) {
    let area = 2 * (depth * width) + 2 * (depth * height) + 2 * (width * height);
    let volume = depth * width * height;

    let result = [area, volume];
    return result;
}




console.log(getSize(4, 2, 6)[1], 48);
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6)[0], 88);
console.log(getSize(4, 2, 6)[1], 48);