function missing(arr) {
    let n = arr.length;
    if (n == 0) {
        return undefined;
    }
    function sum(n) {
        return ((n * n) + n) / 2;
    }
    let tmpSumm = 0;
    let curentSumm = sum(n);
    for (let i = 0; i < n; i++) {
        tmpSumm += arr[i];
    }
    if (curentSumm == tmpSumm) {
        return undefined;
    } else {
        return sum(n + 1) - tmpSumm;
    }
}
console.log(missing([]));
console.log(missing([1, 4, 3]));
console.log(missing([2, 3, 4]));
console.log(missing([5, 1, 4, 2]));
console.log(missing([1, 2, 3, 4]));