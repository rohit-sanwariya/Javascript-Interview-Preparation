var isPalindrome = function (x) {
  let final = 0;
  let rem = 0;
  let number = x;
  while (number > 0) {
    rem = number % 10;
    number = Math.floor(number / 10);
    final = 10 * final + rem;
     
  }
  return final === x;
};
console.log(isPalindrome(12345));
