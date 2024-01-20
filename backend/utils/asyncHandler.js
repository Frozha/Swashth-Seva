const asyncHandler = ( requestHandler ) => {
    return ( req, res, next ) => {
        Promise
        .resolve( ( requestHandler( req, res, next ) ) )
        .catch( ( error ) => {
            console.log(`Error occured. Error: ${error.message}.`);
            next(error);
        } );
    }
};

export { asyncHandler };