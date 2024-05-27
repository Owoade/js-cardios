function reverseString( str: string ): string{
    if( str === "" ) return str;

    return reverseString( str.substring(1) ) + str[0]
}