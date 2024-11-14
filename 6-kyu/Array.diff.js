// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// function arrayDiff(a, b) {
//     let result = [];
//     for (let i = 0; i < a.length; i++) {
//           for (let j = 0; j < b.length; j++) {
//             if (a[i] !== b[j]) {
//                 result.push(a[i])
//                 console.log(b);
//             } else {
//                 a.splice(i, 1)
//             }
//         }
//     }
//     return a.length === 0 || b.length === 0  ? a : result;
// }


function arrayDiff(a, b) {
    let result = [];
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (b[i] === a[j]) {
                a.splice(j, 1);
            }
        }
    }
    return a;
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], [2]));