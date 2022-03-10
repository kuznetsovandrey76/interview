const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;

    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 3)); // 1
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 2, 3, 5, 6], 3)); // 2
