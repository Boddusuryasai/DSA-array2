{/* <aside>
💡 **Question 1**
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

**Example 1:**
Input: nums = [1,4,3,2]
Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4
</aside> */}

//brute force
function arrayPairSum(nums) {
  let maxSum = Number.NEGATIVE_INFINITY; 

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let currentSum = 0;
      for (let k = 0; k < nums.length; k += 2) {
        currentSum += Math.min(nums[k], nums[k + 1]);
      }
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}

// optimised

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b); 
    let maxSum = 0;
    for (let i = 0; i < nums.length; i += 2) {
      maxSum += Math.min(nums[i], nums[i + 1]);
    }
    return maxSum;
  }
  

  

