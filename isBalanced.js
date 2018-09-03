function isBalanced(str) {
    let leftBracket = 0;
    let rightBracket = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "{") {
            leftBracket++;
        }
        if (str[i] === "}") {
            rightBracket++;
        }
        if (rightBracket > leftBracket) {
            return false;
        }
    }
    if (leftBracket === rightBracket) {
        return true;
    }
    return false;
}

console.log(isBalanced('}{'));
console.log(isBalanced('{{}'));
console.log(isBalanced('{}{}'));
console.log(isBalanced('foo { bar { baz } boo }'));
console.log(isBalanced('foo { bar { baz }'));
console.log(isBalanced('foo { bar } }'));