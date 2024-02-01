export const zeroFuel = (
  distance: number,
  mpg: number,
  fuelLeft: number
): boolean => {
  return mpg * fuelLeft >= distance;
  //   throw new Error("Not implemented");
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
