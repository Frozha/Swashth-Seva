import { User } from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { genrateAccessRefreshToken } from './controller-utills/tokenGenerate.js';

const registerUser = asyncHandler( async ( req, res, next ) => {
    try {
        console.log(req.body)
        const { name, email, phone, age, gender, password } = req.body;
    
        if(
            [ name, email, phone, age, gender, password ].some( ( field ) => (
                field?.trim() === ""
            ) )
        ){
            return ApiError(
                400,
                "Compulsory fields cannot be empty.",
            )
        }
    
        const existingUser = await User.findOne({
            $or: [{ email: email }, { phone }]
        }); 
        
    
        if( existingUser ){
    
            console.log( existingUser );
    
            throw new ApiError( 
                409,
                "User already exists."
            )
        }
    
        const createdUser = await User.create({
            name,
            email,
            phone,
            age,
            gender,
            password
        });
    
        const user = await User.findById( createdUser?._id ).select( "-password -refreshToken" );
    
        if( !user ){
            throw new ApiError(
                500,
                "User couldnot be created."
            )
        }
        
        console.log( user );

        return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                user,
                "User successfully created."
            )
        );
    } catch (error) {
        console.log(`Error occured while registering the user. Error: ${ error.message }`);
    }
} );

const loginUser = asyncHandler( async ( req, res, next ) => {

    console.log( "Logging in......" )

    try {
        const { email, phone, password } = req.body;
    
        console.log( req.body )
    
        if( !email && !phone ){
            throw new ApiError( 
                400,
                "Please provide either phone number or email."
            )
        }
        
        console.log( "Logging in......2" )

        const user = await User.findOne({
            $or: [ { email }, { phone } ]
        })
    
        if( !user ){
            throw new ApiError(
                400,
                "User not found."
            )
        }
        
        console.log( "Logging in......3" )

        const isUserValid = await user.isPasswordCorrect( password );
    
        if( !isUserValid ){
            throw new ApiError(
                401,
                "Unauthorized access."
            )
        }
    
        console.log( "Logging in......4" )

        const { accessToken, refreshToken } = await genrateAccessRefreshToken( true, user._id )
    
        console.log( "Logging in......5" )

        const loggedInUser = await User.findById( user._id ).select( "-password -_id -__v -refreshToken" );
    
        if( !loggedInUser ){
            return new ApiError(
                409,
                "Couldnot login the user."
            )
        }

        const options = {
            httpOnly: true,
            secure: true
        }
    
        return res
        .status(200)
        .cookie( "accessToken", accessToken, options )
        .cookie( "refreshToken", refreshToken, options )
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                }
            )
        )
    } catch (error) {
        console.log(`Error occured while logging in the user. Error: ${ error.message }.`);
    }
} );

const logoutUser = asyncHandler( async ( req, res, next ) => {
    User.findByIdAndUpdate(
        req.user?._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie( "accessToken", options )
    .clearCookie( "refreshToken", options )
    .json(
        new ApiResponse(
            200,
            {},
            "User logged-out successfully."
        )
    )

} );

const getCurrentUser = asyncHandler( async ( req, res, next ) => {
    const user = req.user;

    if( !user ){
        throw new ApiError(
            404,
            "User not found."
        )
    }

    user = user.select( "-password -__v -refreshtoken -_id" );

    return res
    .status( 200 )
    .json(
        new ApiResponse(
            200, 
            user,
            "Current user fetched successfully."
        )
    )
} );

export { registerUser, loginUser, logoutUser, getCurrentUser };