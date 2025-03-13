function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      } else if (j + 1 < nums.length) {
        if (nums[j] + nums[j + 1] === target) {
          return [j, j + 1];
        }
      }
    }
  }

  return null;
}
