var min = function (list) {
  return Math.min.apply(null, list);
};

var max = function (list) {
  return Math.max.apply(null, list);
};

const angka = [4, 6, 2, 1, 9, 63, -134, 566];
console.log("max = ", max(angka), ", min = ", min(angka));
