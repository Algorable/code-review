/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let current = "";

  for (let i = 0; i < s.length; i++) {
    current = current.substring(current.indexOf(s[i]) + 1);
    current += s[i];

    if (current.length > longest) {
      longest = current.length;
    }
  }

  return longest;
};

/*
var lengthOfLongestSubstring = function (s) {
  let bucket = []; // 문자 저장
  let maxLength = 0;

  // bucket 안에 s[i]가 있을 경우, i 다음부터 끝까지 잘라서 bucket에 다시 넣고 push
  // 없다면 별다른 조치없이 push
  for (let i = 0; i < s.length; i++) {
    if (bucket.includes(s[i])) {
      const index = bucket.findIndex((value) => value === s[i]);
      bucket = bucket.slice(index + 1);
      bucket.push(s[i]);
    } else {
      bucket.push(s[i]);
    }

    // 리턴값 갱신
    maxLength = Math.max(maxLength, bucket.length);
  }

  return maxLength;
};
*/
