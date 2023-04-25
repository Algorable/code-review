/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let step = numRows === 1 ? 0 : -1;
    const res = new Array(numRows).fill('');
    let i = 0;
    
    for (let j of s) {
      res[i] += j;
      if (i === 0 || i === numRows - 1) {
        step = -step; // 방향전환
      }
      i += step;
    }
    
    return res.join('');
};
