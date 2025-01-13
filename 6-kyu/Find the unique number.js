function findUniq(arr) {
  let hash = {};
  arr.forEach((elem) => {
    hash[elem] = (hash[elem] || 0) + 1;
  });
  return Number(Object.entries(hash).filter((n) => n[1] == 1)[0][0]);
}
