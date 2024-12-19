function generateHashtag(str) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let longeur = 0;
  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) longeur++;
  }
  console.log(str.length);
  let r = str.split("").every((n) => n === "" || n === " " || n === ".")
    ? false
    : str
        .split(" ")
        .filter((n) => n !== "")
        .map(function (n) {
          if (n) {
            let result = n.split("");
            result[0] = result[0].toUpperCase();
            return result.join("");
          } else {
            return n;
          }
        });
  console.log(r, str.length);
  return r === false || longeur >= 140 ? false : "#" + r.join("");
}
