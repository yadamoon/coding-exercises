const isPrime = (num) => {
  if (num <= 1) {
    return console.log(`${num} is less than 1 or equal one `);
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log("is not Prime Number ");
      return false;
    }
  }
  console.log("yes the number are Prime Number");
  return true;
};

isPrime(7);
isPrime(10);
