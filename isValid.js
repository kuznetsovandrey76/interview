/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const leftBrackets = new Set(["(", "{", "["]);
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (leftBrackets.has(current)) {
      stack.push(current);
    } else {
      const last = stack.pop();
      if (
        !(
          (current === ")" && last === "(") ||
          (current === "]" && last === "[") ||
          (current === "}" && last === "{")
        )
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
