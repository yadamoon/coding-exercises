const palindromeCheker = (str) => {
  let local = str.split("").reverse().join("");
  if (local === str) {
    console.log(`${str}` + " are palindrome");
  } else {
    console.log(`${str}` + " are not palindrome");
  }
};

palindromeCheker("1211");
palindromeCheker("eve");
