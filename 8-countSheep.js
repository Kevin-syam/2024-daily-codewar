var countSheep = function (num) {
  let i = 0;
  let a = [];
  while (i < num) {
    i++;
    a.push(i.toString() + " sheep...");
  }
  return a.join("");
};

console.log(countSheep(3));
