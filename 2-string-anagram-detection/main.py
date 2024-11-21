# main.py
class Solution:
  def stringAnagramDetection(self, str1: str, str2: str) -> bool:
    if (len(str1) != len(str2)):
      return False
  
    return sorted(str1) == sorted(str2)

solution = Solution()

str1 = input("Enter the first string: ")
str2 = input("Enter the second string: ")

result = solution.stringAnagramDetection(str1, str2)
print(result)

# How To Run
# cd ./string-anagram-detection
# python3 main.py