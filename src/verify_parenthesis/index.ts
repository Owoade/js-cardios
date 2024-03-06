function validateParenthesis( str: string ){
    let stack = [];

    for( let i=0; i< str.length; i++ ){
        const char = str[i];

        switch( char ){
            case  "{" : 
            stack.push("}");
            break;
            
            case "[": 
            stack.push("]");
            break;

            case "(": 
            stack.push(")");
            break;

            default: 
            const last = stack.pop();
            if( last !== char ) return false;
        }
    }

    return stack.length === 0;
}


console.log( validateParenthesis("{}()"));
console.log( validateParenthesis("{}()}"));