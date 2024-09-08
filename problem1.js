function calculateMoney(ticket) {
  if (ticket < 0 || typeof ticket !== "number") {
    return "Invalid Number";
  }
  let returnTaka = ticket * 120 - (500 + 8 * 50);
  return returnTaka;
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney("str"));
