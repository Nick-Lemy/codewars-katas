// No need for doing for loop with the length of the list
// var names = ["Nick", "John", "Paul", "George", "Ringo"];
// //Here is a better way to interate over the list
// for (const name of names) {
//   console.log(name);
// }
//but still you couldn't use the index of the element :sad:

// var uniqueInOrder = function (iterable) {
//   let my_list = iterable.split("");
//   let result = [my_list[0]];
//   for (let i = 0; i < my_list.length; i++) {
//     if (result[result.length - 1] !== my_list[i]) {
//       result.push(my_list[i]);
//     }
//   }
//   return result;
// };
// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// console.log(["A", "B", "C", "D", "A", "B"]);

// console.log(9 > 5 > 2); // false

// var uniqueInOrder = function (iterable) {
//   var result = iterable.split('');
//   for (var i = 0; i < result.length; i++) {
//     for (var j = 0; j < result.length; j++) {
//       if (j !== i) {
//         if (result[i] === result[j]) {
//           result.splice(j, 1);
//         }
//       }
//     }
//   }
//   return result.sort();
// }

// var a = "AAAABBBCCDAABBB";
// var nick = a.split('');
// console.log(nick);
// for (var i = 0; i < nick.length; i++) {
//   for (var j = 0; j < nick.length; j++) {
//     if (i === j) {
//       continue;
//     } else {
//       console.log(nick[i], nick[j]);
//       if (nick[i] === nick[j]) {
//         nick.splice(j, 1);
//       }
//       console.log(nick);
//     }
//   }
// }
// console.log(nick.sort());

// var isSquare = function (n) {
//   return n >= 0 ? ((Math.round(n ^ 0.5) === n) ^ 0.5 ? true : false) : false;
// };

// console.log(isSquare(0));

function isValidSubsequence(array, sequence) {
  let result = [];
  if (array.toString() === sequence.toString()) {
    console.log(array.toString());

    return true;
  } else if (sequence.length === 1) {
    return array.includes(sequence[0]) ? true : false;
  } else {
    sequence.forEach((elem, index) => {
      console.log(elem, index);
      console.log(array.includes(elem));

      if (array.includes(elem)) {
        console.log(array.slice(array.indexOf(elem) + 1));
        console.log(sequence[index + 1]);

        console.log(
          array.slice(array.indexOf(elem) + 1).includes(sequence[index + 1])
        );

        result.push(
          array.slice(array.indexOf(elem) + 1).includes(sequence[index + 1])
        );
      } else {
        result.push(false);
      }
    });
  }
  result.pop();
  console.log(result);
  return result.every((n) => n === true) ? true : false;
}

console.log(isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]));
