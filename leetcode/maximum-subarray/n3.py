class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans =nums[0]
        for i in range(len(nums)):
            for j in range(i,len(nums)):
                 s=0
                 for k in range(i,j):
                     s+=nums[k]
                 if s>ans:
                     ans = s
        return ans
