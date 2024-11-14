// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function arrayDiff(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < b.length; j++) {
            if (a[i] !== b[j]) {
                result.push(a[i])
                console.log(b);
            } else {
                
            }
        }
    }
    return a.length === 0 || b.length === 0  ? a : result;
}
// console.log(arrayDiff([1,2], [1]));
// console.log(arrayDiff([1,2,2], [1]));
// console.log(arrayDiff([1,2,2], [2]));
console.log(arrayDiff([1,2,3], [1,2]));
