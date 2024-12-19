function findOdd(A) {
  const map = {};
  A.forEach((elem) => {
    map[elem] = (map[elem] || 0) + 1;
  });
  let r = Object.entries(map);
  return Number(r.filter((n) => n[1] % 2 !== 0)[0][0]);
}
