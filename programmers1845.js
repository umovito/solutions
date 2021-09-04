function solution(nums) {
    var s = new Set(nums).size;
    return nums.length/2 >= s ? s : nums.length/2;
}
