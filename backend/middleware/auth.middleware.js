import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const verifyJWT = asyncHandler( async ( req, res, next ) => {
    try {
        const accessToken = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
        if( !accessToken ){
            throw new ApiError(
                401,
                "User not logged in."
            )
        }
    
        const decodedToken = jwt.verify( accessToken, process.env.ACCESS_TOKEN_SECRET );
    
        if( !decodedToken ){
            throw new ApiError(
                401,
                "Token already used or expired."
            )
        }
    
        const user = await User.findById( decodedToken?._id );
    
        if( !user ){
            throw new ApiError(
                404,
                "User not found."
            )        
        }
       
        req.user = user;
        next();
    } catch (error) {
        console.log( `Error occured while logging the user out. Error: ${ error.message }. ` );
    }

} )