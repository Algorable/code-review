/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);

  let content = 0;
  let index = 0;

  for (let cookie = 0; cookie < s.length; cookie++) {
    for (let greed = index; greed < g.length; greed++) {
      if (s[cookie] >= g[greed]) {
        content++;
        index = greed + 1;
        break;
      }
    }
  }

  return content;
};
