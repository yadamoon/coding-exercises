const palindromeCheker = (str) => {
  let local = str.split("").reverse().join("");
  if (local === str) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
};

palindromeCheker("1211");
