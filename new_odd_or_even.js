function oddOrEven(array) {
  let b = 0;
  array.forEach(item => (b += item));
  if (b % 2 == 0 || b == 0) {
    return "even";
  } else return "odd";
}

//   https://www.codewars.com/kata/5949481f86420f59480000e7/solutions/javascript
