/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
    return 0;
  }

  let maxLen = 1;
  let start = 0;
  let end = 1;
  let charSet = new Set(s[start]);

  while (end < s.length) {
    const currChar = s[end];
    if (!charSet.has(currChar)) {
      charSet.add(currChar);
      end++;
      maxLen = Math.max(maxLen, end - start);
    } else {
      charSet.delete(s[start]);
      start++;
    }
  }

  return maxLen;
};
