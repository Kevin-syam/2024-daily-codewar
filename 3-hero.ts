export function hero(bullets: number, dragons: number): boolean {
  return bullets / dragons >= 2 ? true : false;
}

// const hero: any = (bullets: number, dragons: number) => (bullets / dragons) >= 2

console.log(hero(10, 5));
