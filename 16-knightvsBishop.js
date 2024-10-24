function knightVsBishop(knightPosition, bishopPosition) {
  // Three possible outputs are "Knight", "Bishop", and "None";
  const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1;
  let solution_knight = [];
  for (var i = -2; i < 3; i++) {
    if (i == 0) continue;
    for (var j = -2; j < 3; j++) {
      if (j == 0 || Math.abs(j) == Math.abs(i)) continue;
      solution_knight.push([i, j]);
    }
  }

  var a = bishopPosition[0] - knightPosition[0];
  var b = alphaVal(bishopPosition[1]) - alphaVal(knightPosition[1]);
  if (JSON.stringify(solution_knight).indexOf([a, b]) > 0) {
    return "Knight";
  } else if (Math.abs(a) == Math.abs(b)) {
    return "Bishop";
  } else {
    return "None";
  }
}

console.log(knightVsBishop([4, "C"], [6, "D"]));

/*
solution:
8 patern fixed , if knight -> bishop - knight = [+2,-1],[+2,+1],[+1,-2],[+1,+2],.... [-3<x<3,-3<y<3,x&y!==0]
n patern , if bishop -> bishop - knight = [+1,+1],[+1,-1],[-1,+1],[-1,-1],....[abs(x)=abs(y),!==0]

*/
