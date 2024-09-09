function deleteInvalids(arr) {
  //Another option---->> if(Array.isArray(arr) === false)
  if (Array.isArray(arr) === false) {
    return "Invalid Array";
  }
  let numArray = [];
  for (let element of arr) {
    // console.log(typeof element);
    if (typeof element === "number" && isNaN(element) === false) {
      // console.log(element);
      numArray.push(element);
    }
  }
  return numArray;
}
console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));

// console.log(isNaN(NaN));
// console.log(isNaN(10));

// console.log(Array.isArray([2, 10, 55]));
// console.log(Array.isArray({ num: [1, 2, 3] }));
