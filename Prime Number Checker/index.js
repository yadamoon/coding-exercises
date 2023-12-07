const isPrime = (num) => {
  if (num <= 1) {
    return console.log(`${num} is less than 1 or equal one `);
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
