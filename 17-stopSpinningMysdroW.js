function spinWords(string) {
  var res = [];
  var words = string.split(" ");
  words.forEach((element) => {
    element.length >= 5
      ? res.push(element.split("").reverse().join(""))
      : res.push(element);
  });
  return res.join(" ");
}

console.log(spinWords("This is another test"));
console.log(spinWords("Welcome"));
