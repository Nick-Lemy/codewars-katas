const spinWords = (string) =>
  string
    .split(" ")
    .map((n) => (n.length < 5 ? n : n.split("").reverse().join("")))
    .join(" ");
