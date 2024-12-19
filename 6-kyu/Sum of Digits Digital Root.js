function digitalRoot(n) {
  let splittedNumber = n.toString().split("");
  while (Number(splittedNumber.join("")) > 9) {
    splittedNumber = splittedNumber
      .reduce((a, b) => Number(a) + Number(b))
      .toString()
      .split("");
  }
  return Number(splittedNumber.join(""));
}
