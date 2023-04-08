/**
 * @param {string} s
 * @return {number}
 */

// 다른 값이 연속되는 부분이 제일 많은 부분의 길이를 반환
const lengthOfLongestSubstring = function (s) {

  let answer = 0;

  // 전체 요소에 대한 순회
  for (let i = 0; i < s.length; i++) {
    let subString = "";
    // 한 요소씩 얼마나 다른 수들이 이어지는 지 확인
    for (let j = i; j < s.length; j++) {
      const currentValue = s[j];
      const isIn = subString.includes(currentValue);
      // 들어 있으면 종료
      if (isIn) {
        break
      }
      subString += currentValue;
    }
    // 답보다 subString 이 길면 새로운 답으로 등록 
    answer = answer < subString.length ? subString.length : answer;
  }
  return answer
};