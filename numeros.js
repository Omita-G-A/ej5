const esPar = function(num) {
  if (num % 2 == 0) return true;
  else return false;
}

console.log(esPar(17));
// exports.numeros = esPar;

module.exports = {
  esPar
}