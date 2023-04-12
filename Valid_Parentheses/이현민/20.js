/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  let map = new Map();
  map.set('(',')');
  map.set('{','}');
  map.set('[',']');
  let b = [];
  for(let i = 0; i < s.length; i++) {
      if(map.has(s.charAt(i))) {
          b.push(s.charAt(i));
      } else {
          let pop = b.pop();
          if(map.get(pop) !== s.charAt(i)) {
              return false;
          }
      }
  }
  return b.length === 0;
};
