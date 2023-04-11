const map = {};
function twoSum(arr, target) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const complement = target - element;
        if (complement.toString() in map) {
            return [map[complement], index, ];
        }
        map[element] = index;
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 4));