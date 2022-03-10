/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let res = "";
  const minLength = Math.min(...strs.map((el) => el.length));
  for (let i = 0; i < minLength; i++) {
    let _res = strs[0][i];
    if (_res && strs.every((str) => str[i] === _res)) {
      res += _res;
    } else {
      return res;
    }
  }
  return res;
};

// longestCommonPrefix(["flower", "flow", "flight"]); // "fl"
// longestCommonPrefix(["flower", "flower", "flower", "flower"]); // "flower"
// longestCommonPrefix(["cir", "car"]); // "c"
// longestCommonPrefix([""]); // ""
