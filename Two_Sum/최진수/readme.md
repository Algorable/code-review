
<img src="https://file.notion.so/f/s/23880747-276c-4705-bf43-9f8647590c62/Untitled.png?spaceId=446850c6-2fc4-414d-a2a0-17a526caf833&table=block&id=26541698-a48d-4d7d-92f3-17ec9eb05438&expirationTimestamp=1679806022424&signature=ehVenFOAL2Qwi-bt0yiMbljt-gCuo932NyRFW0n26BM&downloadName=Untitled.png">

<img src="https://file.notion.so/f/s/be4afb52-1529-4feb-b349-6021801e78b5/Untitled.png?spaceId=446850c6-2fc4-414d-a2a0-17a526caf833&table=block&id=a30ac79a-3c60-4426-ae5f-2e6c43a87b7b&expirationTimestamp=1679806042122&signature=zV-QR_POh_HYZq4Y1oB9McT3IVy9AZpnJgQGFy0rpjQ&downloadName=Untitled.png">

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
