"use strict";
const result = [];
function dfs(i, str, string_arr) {
    // base case
    if (i === str.length)
        return result.push(string_arr.join(""));
    // recursive case
    const char = str[i];
    if (!Number.isInteger(parseInt(char))) {
        string_arr.push(char.toUpperCase());
        dfs(i + 1, str, string_arr);
        string_arr.pop(); // backtracks up one level
        string_arr.push(char.toLowerCase());
        dfs(i + 1, str, string_arr);
        string_arr.pop();
    }
    else {
        string_arr.push(char);
        dfs(i + 1, str, string_arr);
        string_arr.pop();
    }
    return result;
}
console.log(dfs(0, "a1b2", []));
