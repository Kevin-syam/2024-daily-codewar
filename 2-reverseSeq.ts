/*
    WPU 2024 code challange
    day 2/365
    https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/typescript
*/
// Cara simple loop

export const reverseSeq = (n: number): number[] => {
  let result: number[] = [];
  while (n > 0) {
    result.push(n);
    n--;
  }
  return result;
};

console.log(reverseSeq(5));

// cara advance. Func combination:
// (array(n).fill() atau destructring arr(n)) + map + reverse

const reverseSeq2 = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

console.log(reverseSeq2(5));
