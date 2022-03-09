/**
 * @param {number} num
 * @return {boolean}
 */
const isPalindrome = function (num) {
  if (num < 0) return false;

  let reversedNumber = (num) => {
    let res = 0;
    while (num) {
      res = res ? res * 10 : res;
      res += num % 10;
      num = parseInt(num / 10);
    }
    return res;
  };
  return num === reversedNumber(num);
};

console.log(isPalindrome(123)); // false
console.log(isPalindrome(121)); // true
console.log(isPalindrome(1)); // true
console.log(isPalindrome(0)); // true
console.log(isPalindrome(-50)); // false
