/* 
    Pick a pivot (P)
    Partition the list => By pushing each element(e) that satisfies (e<=P) to the left of the pivot
    and each element that satisfies (e > P) to the right of the partion

    Repeat the process for each partition
*/

const unsorted_arr = [4,0,28,1,5,8,4];

function quick_sort( arr ){

    if( arr.length <= 1 ) return arr;

    const pivot = arr[arr.length-1];

    const right_partition = [];
    const left_partition = [];

    for( let i = 0; i < arr.length - 1; i++ ){

        const el = arr[i];

        if( el <= pivot ) left_partition.push( el );
        
        else right_partition.push(el);

    }

    // console.log({left_partition, pivot, right_partition})


    return [...quick_sort(left_partition), pivot, ...quick_sort(right_partition) ]
}

console.log(quick_sort(unsorted_arr))

console.log([...[...[0], 1, ...[4]], 4, ...[...[5], 8, ...[28]]]);