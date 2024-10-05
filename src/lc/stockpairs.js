/*
    Problem:
        Given an array of stocks and target number 
        return the amount of stock pairs that sum up to the target
    
    Hint: 
        Use sets for efficiency
     
*/

function stockPairs( stocks, target ){

    const seen = new Set();
    const pairs = new Set();

    for( let stock of stocks ){

        const complememt = target - stock;

        if( seen.has(complememt) ){

            const pair = [Math.min(stock, complememt), Math.max(stock, complememt)]

            pairs.add(pair.join(','));

        }

        seen.add(stock);

    }

    return pairs.size;

}


console.log(stockPairs([1,2,3,5,4,4,7], 8))