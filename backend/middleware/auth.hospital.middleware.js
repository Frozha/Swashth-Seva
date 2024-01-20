import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from 'jsonwebtoken';
import { Hospital } from '../models/hospital.model.js';

export const verifyHospitalJWT = asyncHandler( async ( req, res, next ) => {
    try {
        const accessToken = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
        if( !accessToken ){
            throw new ApiError(
                401,
                "Hospital not logged in."
            )
        }
    
        const decodedToken = jwt.verify( accessToken, process.env.ACCESS_TOKEN_SECRET );
    
        if( !decodedToken ){
            throw new ApiError(
                401,
                "Token already used or expired."
            )
        }
    
        const hospital = await Hospital.findById( decodedToken?._id ).select( "-password -refreshToken" );
    
        if( !hospital ){
            throw new ApiError(
                404,
                "User not found."
            )        
        }
       
        req.hospital = hospital;
        next();
    } catch (error) {
        console.log( `Error occured while logging the user out. Error: ${ error.message }. ` );
    }

} )