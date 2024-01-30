/*
    WPU 2024 code challange
    day 1/366
    https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
*/
// Cara simple forloop

function grow(x) {
  var result = 1;
  for (var i = 0; i < x.length; i++) {
    result *= x[i];
  }

  return result;
}

console.log(grow([1, 2, 3, 4]));

// Cara advance. func expresion -> func array reduce

const grows = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grows([1, 2, 3, 4]));
