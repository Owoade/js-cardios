
  function sumNaturalNum( num: number ): number{
    if( num === 0 ) return num;
   

    return num +  sumNaturalNum( num - 1 )

  }

  // const sumNaturalNum = ( num ) => num === 0 ? num : num + sumNaturalNum( num  - 1 );

  // console.log( sumNaturalNum(11) );