function points(games) {
  var points = 0;
  for (var res = 0; res < games.length; res++) {
    var x = games[res].substr(0, 1);
    var y = games[res].substr(2);
    if (x > y) {
      points += 3;
    } else if (x == y) {
      points += 1;
    } else {
      points += 0;
    }
  }
  return points;
}

console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
