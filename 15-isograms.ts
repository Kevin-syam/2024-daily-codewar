export function isIsogram(str: string) {
  //...
  //   return str.toLowerCase().replace(/[^\w\s]+/u, "").split(' ').map((x) => x.length);

  var temp = str
    .toLowerCase()
    .replace(/[^\w\s]+/u, "")
    .split("");
  var count = 0;
  for (var i = 0; i < temp.length; i++) {
    for (var j = 0; j <= i; j++) {
      if (temp[j] == temp[i]) {
        count++;
        if (count == 2) return false;
      }
    }
    count = 0;
  }

  return true;
  //   return true;
}

// BEST Practice
export function isIsogramBest(str: string): boolean {
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogramBest("Dermatoglyphics"));
console.log(isIsogram("Dermatoglyphics"));
