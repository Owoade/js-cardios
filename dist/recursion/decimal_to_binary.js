"use strict";
function decimalToBinary(num, rem) {
    console.log(num, rem);
    if (num === 0)
        return rem;
    rem = (num % 2) + rem;
    return decimalToBinary(Math.floor(num / 2), rem);
}
//   console.log(decimalToBinary( 233, ""))
