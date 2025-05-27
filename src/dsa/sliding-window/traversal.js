const arr = [1,2,3];

let i = 0;

let j = 0;

while ( i < arr.length && j < (arr.length - 1) ){
    console.log(arr[i], {i, j});
    if(i === arr.length - 1){
        i = ++j;
    }else {
        i++
    }
}