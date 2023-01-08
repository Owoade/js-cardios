"use strict";
function main(nums, target) {
    let index = -1;
    function dfs(sliced_arr, target) {
        //   cases
        const ARRAY_CONTAINS_SINGLE_ELEMENT = sliced_arr.length === 1;
        if (ARRAY_CONTAINS_SINGLE_ELEMENT) {
            return index = target === sliced_arr[0] ? nums.indexOf(target) : -1;
        }
        else {
            const midpoint = Math.round(sliced_arr.length / 2);
            const first_arr = sliced_arr.slice(0, midpoint);
            const second_arr = sliced_arr.slice(midpoint, sliced_arr.length);
            const greatest_of_first_arr = first_arr[first_arr.length - 1];
            console.log(first_arr, second_arr);
            // edge-cases
            if (midpoint === target)
                return index = nums.indexOf(midpoint);
            if (greatest_of_first_arr === target)
                return index = nums.indexOf(greatest_of_first_arr);
            // recursive case 
            if (greatest_of_first_arr > target)
                return dfs(first_arr, target);
            dfs(second_arr, target);
        }
    }
    dfs(nums, target);
    return index;
}
console.log(main([1, 2, 3, 4, 5, 6, 8, 9, 10], 3));
