function indexOf(arr, searchElement) {
    let index = -1;
    for (let i = 0; i < arr.length; i ++) {
        if(arr[i] === searchElement) {
            return i;
        }
    }
    return index;
}

console.log(indexOf([1, 2, 3], 1));
console.log(indexOf([1, 2, 3], 4));
