function isPalindrome(str) {
    let revStr = '';
    let compareStr = str.replace(/\s/g, '').toLowerCase();
    for (let i = compareStr.length - 1; i >= 0; i--) {
        revStr += compareStr[i];
    }
    if (compareStr === revStr) {
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome(''));
console.log(isPalindrome('abcdcba'));
console.log(isPalindrome('abcd'));
console.log(isPalindrome('A man a plan a canal Panama'));