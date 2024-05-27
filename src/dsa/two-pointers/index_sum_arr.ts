function findIndexSum(arr: number[], sum: number){

    let start = 0;
    let end = arr.length - 1;

    while( start < end ){

        const startValue = arr[start];
        const endValue = arr[end];

        const indexSum = startValue + endValue;

        if( indexSum === sum ) return [startValue, endValue]

        if(indexSum > sum){
            end--
        }else{
            start++
        }

    }

    return []
}

function generateSortedArrayOfNumbers(n:number){
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr;
}

const values = generateSortedArrayOfNumbers(20);

console.log(findIndexSum(values,38));