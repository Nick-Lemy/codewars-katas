/*
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye
*/

// document.querySelector('#btn-container').addEventListener('click', ()=>{}, {capture : true})
// document.querySelector('#btn').addEventListener('click', ()=>{})
// const liste = ['.', ',', ';', ':', '/']
// const paragraph = document.querySelector('#myParagraph').textContent
// const words = paragraph.split('').filter(n=> !liste.includes(n)).join('').split(' ')
// console.log(words);
// function findMultiples(integer, limit) {
//your code here
//   let result = [];
//   for (let i = integer; i <= limit; i++) {
//     if (i % integer === 0) {
//       result.push(i);
//     }
//   }
//   return result;
function secondSymbol(s, symbol) {
  return s
    .split("")
    .map((n, i) => (n === symbol ? i : n))
    .filter((n) => Number(n) === n)[1];
}

// console.log(secondSymbol("Hello world!!!", "l"));
// let num = "hello";
// console.log(num.toString(2));
// console.log(Number(10, 2));

// let num = 5;
// parseInt(5, 2);
// Number(5, 2);
// let arr = [1, 2, 10];
// let sumOfDifferences = (arr) => {
//   arr.sort((a, b) => b - a)[0] - arr.sort((a, b) => b - a)[arr.length];
// };
// console.log(sumOfDifferences(arr));

// function XO(str) {
//   //code here
//   console.log(
//     str.split("").filter((n) => n === "x"),
//     str.split("").filter((n) => n === "o")
//   );

//   return (
//     str.split("").filter((n) => n.toLowerCase() === "x").length ===
//     str.split("").filter((n) => n.toLowerCase() === "o").length
//   );
// }

// console.log(XO("ooxx"));
// let XO = (str) =>
//   str.split("").filter((n) => n.toLowerCase() === "x").length ===
//   str.split("").filter((n) => n.toLowerCase() === "o").length;

// function minimumNumber(numbers) {
//   let sum = numbers.reduce((acc, num) => acc + num);
//   while (!checkIfPrime(sum)) {
//     sum++;
//   }
//   return sum;
// }

// function checkIfPrime(n) {
//   for (let i = 2; i < (n ^ 0.5); i++) {
//     if (n % i === 0) {
//       console.log(i);

//       return false;
//     }
//   }
//   return true;
// }
// console.log(minimumNumber([1, 9]));

// function generateHashtag(str) {
//   let r = str.split("").every((n) => n === "" || n === " " || n === ".")
//     ? false
//     : str.split(" ").map(function (n) {
//         if (n) {
//           let result = n.split("");
//           result[0] = result[0].toUpperCase();
//           return result.join("");
//         } else {
//           return n;
//         }
//       });
//   return r === false || str.length >= 140
//     ? false
//     : str.split(" ").length === 1
//     ? "#" +
//       str.slice(0, str.length / 2) +
//       str[str.length / 2].toUpperCase() +
//       str.slice(str.length / 2 + 1)
//     : "#" + r.join("");
// }

function generateHashtag(str) {
  let r = str.split("").every((n) => n === "" || n === " " || n === ".")
    ? false
    : str.split(" ").map(function (n) {
        if (n) {
          let result = n.split("");
          result[0] = result[0].toUpperCase();
          return result.join("");
        } else {
          return n;
        }
      });
  return r === false || str.length >= 140 ? false : "#" + r.join("");
}

console.log(generateHashtag("Codewars"));
