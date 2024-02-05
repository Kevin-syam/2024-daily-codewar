export function smash(words: string[]): string {
  return words.join(" ");
}

// const smash = (words: string[]) => words.join("");

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
