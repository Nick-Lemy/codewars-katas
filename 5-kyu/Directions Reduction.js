function dirReduc(arr) {
  // ...
  arr.map((n) => n.toLowerCase());
  arr.forEach(function (elem, index) {
    if (
      (elem === "NORTH" && arr[index + 1] === "SOUTH") ||
      (elem === "SOUTH" && arr[index + 1] === "NORTH") ||
      (elem === "WEST" && arr[index + 1] === "EAST") ||
      (elem === "EAST" && arr[index + 1] === "WEST")
    ) {
      arr.splice(index, 2);
    }
  });
  arr.forEach(function (elem, index) {
    if (
      (elem === "NORTH" && arr[index + 1] === "SOUTH") ||
      (elem === "SOUTH" && arr[index + 1] === "NORTH") ||
      (elem === "WEST" && arr[index + 1] === "EAST") ||
      (elem === "EAST" && arr[index + 1] === "WEST")
    ) {
      arr.splice(index, 2);
    }
  });
  arr.forEach(function (elem, index) {
    if (
      (elem === "NORTH" && arr[index + 1] === "SOUTH") ||
      (elem === "SOUTH" && arr[index + 1] === "NORTH") ||
      (elem === "WEST" && arr[index + 1] === "EAST") ||
      (elem === "EAST" && arr[index + 1] === "WEST")
    ) {
      arr.splice(index, 2);
    }
  });
  return arr;
}
