function reduce(arr, condition, currentValue) {
    let sum = currentValue;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 10));