function proCategorization(pros, preferences) {
  //   console.log(pros,preferences)
  let obj = {};
  for (const pro of pros) {
    obj[pro] = preferences[pros.indexOf(pro)];
  }
  let mySet = new Set();
  for (const value of preferences) {
    for (const element of value) {
      mySet.add(element);
    }
  }
  let result = [];
  for (const u of Array.from(mySet).sort()) {
    let el = [[u], []];
    for (const pro in obj) {
      console.log;
      if (obj[pro].includes(u)) {
        el[1].push(pro);
      }
    }
    result.push(el);
  }
  //   console.log(Array.from(mySet).sort())
  return result;
}

/*

[
  [ [ 'Code progammer' ], [ 'pros-3', 'pros-5', 'pros-7', 'pros-8' ] ],
  [ [ 'Computer lessons' ], [ 'pros-7', 'pros-8' ] ],
  [ [ 'Computer repair' ], [ 'pros-7', 'pros-8', 'pros-10' ] ],
  [ [ 'Cook' ], [ 'pros-5', 'pros-6', 'pros-7', 'pros-8', 'pros-10' ] ],
  [
    [ 'Data recovery service' ],
    [ 'pros-3', 'pros-5', 'pros-6', 'pros-8' ]
  ],
  [ [ 'Haircut' ], [ 'pros-7', 'pros-8' ] ],
  [ [ 'Handyman' ], [ 'pros-3', 'pros-8' ] ],
  [ [ 'House cleaning' ], [ 'pros-3', 'pros-7' ] ],
  [ [ 'Pet care' ], [ 'pros-6', 'pros-7', 'pros-8' ] ],
  [ [ 'President' ], [ 'pros-5', 'pros-6', 'pros-8' ] ]
]

*/

console.log(
  proCategorization(
    ["pros-3", "pros-5", "pros-6", "pros-7", "pros-8", "pros-10"],
    [
      ["Code progammer", "Data recovery service", "Handyman", "House cleaning"],
      ["Code progammer", "Cook", "Data recovery service", "President"],
      ["Cook", "Data recovery service", "Pet care", "President"],
      [
        "Code progammer",
        "Computer lessons",
        "Computer repair",
        "Cook",
        "Haircut",
        "House cleaning",
        "Pet care",
      ],
      [
        "Code progammer",
        "Computer lessons",
        "Computer repair",
        "Cook",
        "Data recovery service",
        "Haircut",
        "Handyman",
        "Pet care",
        "President",
      ],
      ["Computer repair", "Cook"],
    ]
  )
);
