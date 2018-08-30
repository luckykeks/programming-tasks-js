function filter(arr, condition) {
    let filteredArr = [];
    for( let i = 0; i < arr.length; i++) {
        if(condition(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

console.log(filter([1, 2, 3, 4], n => n < 3));