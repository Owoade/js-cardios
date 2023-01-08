"use strict";
function binarySearch(tree, val) {
    console.log(tree);
    if (tree.length === 0)
        return -1;
    const left = 0;
    const right = tree.length - 1;
    const midIndex = Math.floor((left + right) / 2);
    const midpoint = tree[midIndex];
    if (midpoint === val)
        return val;
    if (midpoint < val)
        return binarySearch(tree.slice(midIndex + 1), val);
    return binarySearch(tree.slice(left, midIndex), val);
}
console.log(binarySearch([1, 2, 3, 45, 56, 100, 201, 300, 400, 401, 403], 56));
// console.log( [1,2,4,5].slice(2))
