
function multiply(a, b) {
  return a * b;
}

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

const double = partial(sum, 2);

console.log(double(4));
