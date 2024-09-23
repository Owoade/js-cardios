/* 
    The simplest of them all as they say
    traverse the array and along its path, it swaps elements that satisfies the constraint e[i] > e[i+1],
    Such that for each traversal the largest element is pushed to the end of the array
 */

    
const unsorted_arr = [34, 7, 23, 32, 5, 62, 16, 12, 4, 19];
function bubble_sort( arr, sorted_arr ){
    
    // base case
    if( arr.length < 1 ) return sorted_arr;

    // recursive case
    for( let i = 0; i < arr.length; i++ ){
        
        const el = arr[i];
        const next_el = arr[i+1];

        // Due to falsy nature of 0 hence not using !next_el
        if( Number.isInteger(next_el) ){
            if(el > next_el) {
                arr[i] = next_el;
                arr[i+1] = el;
            }
        }
    }

    const last_el = arr.pop();

    sorted_arr.unshift(last_el);

    return bubble_sort(arr, sorted_arr);

}

console.log(bubble_sort(unsorted_arr, []))