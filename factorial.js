function factorial(num) {
    if(num < 0) {
        return new Error('Enter value > 0');
    }
        let fac = 1;
        for (let i = 1; i <= num; i++) {
            fac *= i;
        }
        return fac;
}


console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));