import { User } from '../../models/user.model.js';
import { Hospital } from '../../models/hospital.model.js';
import { ApiError } from '../../utils/ApiError.js';

export async function genrateAccessRefreshToken( check, userID ){
    try {
        let user;
        if( check ) user = await User.findById( userID );
        else user = await Hospital.findById( userID );
    
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
    
        if( !accessToken ){
            return new ApiError(
                400,
                `Access Token not created.`
            );
        }

        user.refreshToken = refreshToken;
    
        await user.save( { validationBeforeSave: false } );
        
        console.log( { accessToken, refreshToken } );
        return { accessToken, refreshToken };
    } catch (error) {
        console.log( `Error occured. Error: ${ error.message }.` )
    }
}