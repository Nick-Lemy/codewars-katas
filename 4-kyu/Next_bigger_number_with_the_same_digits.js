// console.log(nextBigger(21));

// function nextBigger(n) {
//   let digitsOfN = n
//     .toString()
//     .split("")
//     .map((elem) => Number(elem));
//   for (let i = digitsOfN.length - 1; i >= -1; i--) {
//     for (let j = i - 1; j > 0; j--) {
//       console.log(digitsOfN[i], digitsOfN[j]);
//       if (digitsOfN[i] > digitsOfN[j]) {
//         digitsOfN.splice(j, 1, digitsOfN[i]);
//         digitsOfN.splice(i, 1);
//         return Number(digitsOfN.join(""));
//       }
//     }
//   }
//   return -1;
// }

