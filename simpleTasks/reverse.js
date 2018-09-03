function reverse(str) {
    let rev = '';
    if (str.trim() == '') {
        rev = "''";
    } else {
        for (let i = str.length - 1; i >= 0; i--) {
            rev += str[i];
        }
    }
    return rev;
}

console.log(reverse(''));
console.log(reverse('abcdef'));