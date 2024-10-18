console.log([2,310 ,32,95,60,40,89].sort((a,b)=>{
    const a_to_string = String(a);
    const b_to_string = String(b);

    const first = a_to_string[0];
    const second = b_to_string[0];

    if( first !== second ){
        if( parseInt(first) > parseInt(second)) return parseInt(second) - parseInt(first)
    }else{
        if(a > b){
            console.log({a,b})
            const substr = a_to_string.substring(0, b_to_string.length);
            if(parseInt(substr) > b ) return b - parseInt(substr)
            else return parseInt(substr) - b;
        }else {
            console.log({a,b})
            const substr = b_to_string.substring(0, a_to_string.length);
            if(parseInt(substr) > a ) return a - parseInt(substr)
            else return parseInt(substr) - a;
        }
    }

  }))