function binary_search(haystack, needle){

    let high = haystack.length,
        low = 0;
    
    while ( high > low ){

        const mid = Math.floor((high + low)/2);

        console.log(mid)

        const value = haystack[mid];

        if( value === needle ) return mid;

        if( needle > value ) low = mid + 1;

        else high = mid - 1;

    }

    return -1;

}

console.log(binary_search([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 420))