jinsooho3
jinsooho3
Mar 25, 2023 13:35

Details
Solution
JavaScript
Runtime
170 ms
Beats
19.74%
Memory
42.4 MB
Beats
61.57%
Click the distribution chart to view more details
Notes
Write your notes here
Related Tags
Select tags
0/5
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let Ntarget = 0;
    for(let i = 0;i<nums.length;i++){
        Ntarget = target - nums[i];
        if(nums.includes(Ntarget))

        if(nums.lastIndexOf(Ntarget)>i){
            return [ i, nums.lastIndexOf(Ntarget)]
        }

    }
};
