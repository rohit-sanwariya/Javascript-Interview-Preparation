const map = {};
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const complement = target - element;
    if(complement in map){
      return [map[complement],index];
    }
    map[element] = index;
    
}
}
console.log(twoSum([2, 7, 11, 15], 9));;
 
