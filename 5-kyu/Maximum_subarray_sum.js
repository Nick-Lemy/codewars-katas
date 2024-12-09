var maxSequence = function (arr) {
  let test = [];
  for (let j = 0; j <= arr.length; j++) {
    for (let i = j + 1; i <= arr.length; i++) {
      let slicedArray = arr.slice(j, i);
      test.push(slicedArray.reduce((acc, num) => acc + num));
    }
  }
  return arr.length === 0 || test.every((n) => n < 0)
    ? 0
    : test.sort((a, b) => b - a)[0];
};
