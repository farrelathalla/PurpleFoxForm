# main.py
from typing import List

class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[List[int]]:
    res = []
        
    for l in range(len(nums)):
        for i in range(l + 1, len(nums)):
            if nums[l] + nums[i] == target:
                res.append([nums[l], nums[i]])
    
    return res

solution = Solution()

nums_input = input("Enter the list of number (separated by spaces): ")
target = int(input("Enter the target: "))

nums = [int(x) for x in nums_input.split()]

result = solution.twoSum(nums, target)

print(result)

# How To Run
# cd ./array-manipulation
# python3 main.py