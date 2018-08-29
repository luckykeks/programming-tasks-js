function fib (num) {
    if(num < 0) {
        return new Error('Enter value > 0');
    }
        if (num == 0){
        return 0;
        }
        if (num == 1){
        return 1;
        } else{
        return fib(num - 1) + fib(num - 2);
    }
}


console.log(fib(0));
console.log(fib(1));
console.log(fib(10));
console.log(fib(20));