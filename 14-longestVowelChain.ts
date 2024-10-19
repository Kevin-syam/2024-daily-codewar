export function solve(s: string) {
  var count: number[] = [];
  var kalimat: Array<string> = Array.from(s);
  for (var i = 0; i < kalimat.length; i++) {
    if (
      kalimat[i] == "a" ||
      kalimat[i] == "e" ||
      kalimat[i] == "i" ||
      kalimat[i] == "o" ||
      kalimat[i] == "u"
    ) {
      count.push(1);
      for (var j = i; j < kalimat.length; j++) {
        if (
          kalimat[j + 1] == "a" ||
          kalimat[j + 1] == "e" ||
          kalimat[j + 1] == "i" ||
          kalimat[j + 1] == "o" ||
          kalimat[j + 1] == "u"
        ) {
          count[i] += 1;
        } else {
          break;
        }
      }
    } else {
      count.push(0);
    }
  }

  return Math.max(...count);
}

// ESLINT ver (BEST)
export function solveBest(s: string) {
  // export const solve = (str: string): number =>
  return Math.max(...s.split(/[^aeiou]/i).map((x) => x.length));
}

console.log(solveBest("codewarriors"));
