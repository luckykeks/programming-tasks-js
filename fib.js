function fibRec(num) {
    if (num < 0) {
        return new Error('Enter value > 0');
    }
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    } else {
        return fibRec(num - 1) + fibRec(num - 2);
    }

}

function fib(num) {
    if(num < 0) {
        return new Error('Enter value > 0');
    }
    let a = 1, b = 1, c = 0, i = 0;
    for( i = 3; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}


console.log(fibRec(0));
console.log(fibRec(1));
console.log(fibRec(10));
console.log(fibRec(20));

console.log(fib(30));
console.log(fib(50));
console.log(fib(70));