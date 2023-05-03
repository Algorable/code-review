/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let plusNum = 1;
    for(let i = digits.length-1;i>=0;i--){
        digits[i] += plusNum;
        if(digits[i]<10){
            plusNum = 0;
        }
        else{
            digits[i] = 0;
            plusNum = 1;
        }
    }
    if(plusNum === 1){
        digits.unshift(1);
    }
    return digits;
};
