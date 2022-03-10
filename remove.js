const removeDuplicates = (nums) => {
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[l++] = nums[i];
    }
  }

  console.log(l, nums); // 5 [0, 1, 2, 5, 6, 1, 2, 5, 5, 5, 5, 6]
  return l;
};

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 5, 5, 5, 5, 6]);

var removeElement = (nums, val) => {
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[l++] = nums[i];
    }
  }
  console.log(l, nums); // 5 [0, 1, 3, 0, 4, 0, 4, 2]
  return l;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
