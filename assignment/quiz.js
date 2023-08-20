const func2 = (a, b) => {
  if (b === 0) return 1;
  return a * func(a, b - 1);
};
console.log(func(4, 3));

const func1 = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let sum = n + func(n - 1) + func(n - 2);
  return sum;
};
console.log(func(4));
