function reduce(array, callback, initialValue) {
    if (!(array instanceof Array && typeof callback === 'function')) {
        console.error('Incorrect function arguments');
        return;
    }
    if (array.length === 0) {
        return initialValue;
    }
    if (initialValue == undefined) initialValue = 0;
    let currentValue = array.shift();
    return reduce(array, callback, callback(initialValue, currentValue));
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 1));