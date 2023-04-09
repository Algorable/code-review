var twoSum = function(nums, target) {
  
  // Variables
  const array = nums;   
  const copyArray = array;  
  const newArray=[] ;
  

  // 1. array
  for (let first = 0; first < array.length; first++) {
    // 2. copyArray
    for (let second = 0; second < copyArray.length; second++) {
      if (first===second) {
         continue;
        }else{
          if ( target === array[first] + copyArray[second]) {
          newArray.push(first) // 3. newArrayに追加
        }
      }
    } 
  }; 
  console.log(newArray);
  return newArray
 
};
twoSum([3,2,4] , 6);