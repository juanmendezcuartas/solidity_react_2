let nums = [2,5,5,11]
let target = 10


var twoSum = function(nums, target) {
    let indice = []
    for (let index = 0; index < nums.length; index++) {
        for (let index2 = 1; index2 < nums.length; index2++) {
            if (nums[index] + nums[index2] == target && index !=index2){
                indice.push(index, index2) 
                return (indice);
            }      
        }
    }
};

resulutado = twoSum(nums, target);
console.log(resulutado)