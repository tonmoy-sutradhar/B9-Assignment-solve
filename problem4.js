function password(obj) {
  if (
    obj.name === undefined ||
    obj.WebsiteName === undefined ||
    obj.birthYear === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "Invalid";
  }

  let capital = obj.WebsiteName[0].toUpperCase() + obj.WebsiteName.slice(1);
  let passString = capital + "#" + obj.name + "@" + obj.birthYear;

  return passString;
}

console.log(
  password({ name: "kolimuddin", birthYear: 1999, WebsiteName: "google" })
);
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));

// let birthYear = 1992;
// console.log("Tonmoy".length);
// console.log(birthYear.toString().length === 4);
