// Here is the kata's link https://www.codewars.com/kata/523f5d21c841566fde000009/javascript
// Have fun :D !

function arrayDiff(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i]) === false) {
            result.push(a[i]);
        }
    }
    return result;
}