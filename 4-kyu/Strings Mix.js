function mix(s1, s2) {
  s1 = s1.split("").filter((n) => n === n.toLowerCase());
  s2 = s2.split("").filter((n) => n === n.toLowerCase());
  let result = [];
  const map1 = {};
  s1.forEach((elem) => {
    map1[elem] = (map1[elem] || 0) + 1;
  });
  const map2 = {};
  s2.forEach((elem) => {
    map2[elem] = (map2[elem] || 0) + 1;
  });

  let arr1 = Object.entries(map1)
    .filter((n) => s2.includes(n[0]) && n[0] !== " ")
    .sort((a, b) => b[1] - a[1]);
  let arr2 = Object.entries(map2)
    .filter((n) => s1.includes(n[0]) && n[0] !== " ")
    .sort((a, b) => b[1] - a[1]);
  let arMap1 = {};
  let arMap2 = {};
  arr1.forEach((elem) => {
    arMap1[elem[0]] = elem[1];
  });
  arr2.forEach((elem) => {
    arMap2[elem[0]] = elem[1];
  });
  console.log(arMap1, arMap2);

  for (key1 in arMap1) {
    for (key2 in arMap2) {
      if (arMap1[key] === arMap1[key] && arMap2[key] === 1) {
      } else if (arMap2[key] > arMap1[key]) {
        result.push("1:" + key.repeat(arMap2[key]));
      } else if (arMap2[key] === arMap1[key]) {
        result.push("=:" + key.repeat(arMap1[key]));
      } else {
        result.push("2:" + key.repeat(arMap1[key]));
      }
    }
    if (arMap2[key] === arMap1[key] && arMap2[key] === 1) {
    } else if (arMap2[key] > arMap1[key]) {
      result.push("1:" + key.repeat(arMap2[key]));
    } else if (arMap2[key] === arMap1[key]) {
      result.push("=:" + key.repeat(arMap1[key]));
    } else {
      result.push("2:" + key.repeat(arMap1[key]));
    }
  }
  return result.join("/");
}

console.log(
  mix("looping is fun but dangerous", "less dangerous than coding").split("/")
);
console.log("1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg".split("/"));
