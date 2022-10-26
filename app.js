const calculator = ( () =>
{
    let val, newVal
    function add( ...args )
    {
        val = Array.from( args )
        newVal = val.reduce( ( pre, acu ) =>
        {
            return pre + acu
        } )
        console.log( newVal );
    }
    function subtract( ...args )
    {
        val = Array.from( args )
        newVal = val.reduce( ( pre, acu ) =>
        {
            return pre - acu
        } )
        console.log( newVal );
    }
    function multiplying( ...args )
    {
        val = Array.from( args )
        newVal = val.reduce( ( pre, acu ) =>
        {
            return pre * acu
        } )
        console.log( newVal );
    }
    function dividing( ...args )
    {
        val = Array.from( args )
        newVal = val.reduce( ( pre, acu ) =>
        {
            return pre / acu
        } )
        console.log( newVal );
    }
    function bigNum( ...args )
    {
        val = Array.from( args )
        newVal = val.reduce( ( pre, acu ) =>
        {
            return pre > acu ? pre : acu
        } )
        console.log( newVal );
    }
    function smallNum( ...args )
    {
        val = Array.from( args )
        newVal = val.reduce( ( pre, acu ) =>
        {
            return pre < acu ? pre : acu
        } )
        console.log( newVal );
    }
    function average( ...args )
    {
        val = Array.from( args )
        newVal = val.reduce( ( pre, acu ) => { return ( pre + acu / val.length ) } )
        console.log( newVal );
    }
    return {
        add,
        subtract,
        multiplying,
        dividing,
        bigNum,
        smallNum,
        average
    }
} )()
