function minimumNumber(numbers) {
  let sum = numbers.reduce((acc, num) => acc + num);
  while (!checkIfPrime(sum)) {
    sum++;
  }
  return sum - numbers.reduce((acc, num) => acc + num);
}

function checkIfPrime(n) {
  for (let i = 2; (i < n) ^ 0.5; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
