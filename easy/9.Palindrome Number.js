function isPalindrome(x) {
  let rev = 0;
  let temp = x;

  while (temp > 0) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
  }

  return rev === x;
}
