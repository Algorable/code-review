class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        
        # nums(Ascending order) 
        left=0
        right=len(nums)-1
        while left<=right:
            mid=(left+right)//2
            if nums[mid]>target: # Search to left
                right=mid-1
            elif nums[mid]<target: # Search to right 
                left=mid+1   
            else: # Correct
                return mid
        # Incorrect
        return left