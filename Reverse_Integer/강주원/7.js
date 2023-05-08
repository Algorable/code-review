const reverse = function(x) {
  let isNagative = x < 0 ? true : false; // 음수인지 확인

  const ALLOWED = 2 ** 31 // 허용되는 크기

  let output = ("" + Math.abs(x)).split('').reverse(); // 정수 문자열 변환하고 배열로 만들기

  while (output[0] == '0') output.shift(); // 0 거르기

  output = isNagative ? '-' + output.join('') : output.join('');

  let isAllowed = Math.abs(output) < ALLOWED ? true : false; // 제한된 범위를 넘는지 확인

  return isAllowed ? output : 0
}