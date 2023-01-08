"use strict";
function reverseString(str) {
    if (str === "")
        return str;
    return reverseString(str.substring(1)) + str[0];
}
