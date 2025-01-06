function order(words) {
  // ...
  let tout = {};
  let splittedWords = words.split(" ");
  splittedWords.forEach((elem) => {
    let e = elem.split("").filter((n) => Number(n));
    tout[e[0]] = elem;
  });

  let result = Object.keys(tout)
    .map((n) => Number(n))
    .sort((a, b) => a - b)
    .map((n) => tout[n]);
  return result.join(" ");
}
