# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n):
        left = 1
        right = n
        while left < right:
            mid = (right + left) // 2
            if not isBadVersion(mid):
                left = mid + 1 
            else:
                right = mid
                
        return left