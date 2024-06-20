function pallindrome(s){

    if(!s) return false;

    const string_arr = s.split("").map( _ => _.toLowerCase() );

    let start = string_arr[0];
    let end = string_arr[string_arr.length -1];

    while( start < end ){
        if( string_arr[start] !== string_arr[end] ) return false
        start += 1;
        end -= 1;
    }

    return true;
    
}