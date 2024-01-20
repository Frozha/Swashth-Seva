import { Hospital } from '../models/hospital.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { genrateAccessRefreshToken } from './controller-utills/tokenGenerate.js';

const registerHospital = asyncHandler( async ( req, res, next ) => {
    const { name, email, phone, company, city, password } = req.body;

    if(
        [ name, email, phone, company, city, password ].some( ( field ) => (
            field?.trim() === ""
        ) )
    ){
        return ApiError(
            400,
            "Compulsory fields cannot be empty.",
        )
    }

    const existingHospital = await Hospital.findOne({
        $or: [ { email }, { phone } ]
    });

    if( existingHospital ){
        throw new ApiError( 
            409,
            "Hospital already exists."
        )
    }

    const hospital = await Hospital.create({
        name,
        email: email.toLowerCase(),
        phone,
        company,
        city,
        password
    });


    if( !hospital ){
        throw new ApiError(
            500,
            "Hospital couldnot be created."
        )
    }

    hospital = hospital.select( "-_id -password -refreshToken -__v" );

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            hospital,
            "Hospital successfully created."
        )
    );
} );

const loginHospital = asyncHandler( async ( req, res, next ) => {
    const { email, phone, password } = req.body;

    if( !email && !phone ){
        throw new ApiError( 
            400,
            "Please provide either phone number or email."
        )
    }

    const hospital = await Hospital.findOne({
        $or: [ { email }, { phone } ]
    })

    if( !hospital ){
        throw new ApiError(
            400,
            "Hospital not found."
        )
    }

    const isHospitalValid = await hospital.isPasswordCorrect( password );

    if( !isHospitalValid ){
        throw new ApiError(
            401,
            "Unauthorized access."
        )
    }

    const { accessToken, refreshToken } = await genrateAccessRefreshToken( false, hospital._id )

    const loggedInHospital = await Hospital.findById( hospital._id ).select( "-password -_id -__v -refreshToken" );

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
                hospital: loggedInHospital,
                accessToken,
                refreshToken
            }
        )
    )

} );

const logoutHospital = asyncHandler( async ( req, res, next ) => {
    Hospital.findByIdAndUpdate(
        req.hospital?._id,
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
            "Hospital logged-out successfully."
        )
    )

} );

const getCurrentHospital = asyncHandler( async ( req, res, next ) => {
    const hospital = req.hospital;

    if( !hospital ){
        throw new ApiError(
            404,
            "User not found."
        )
    }

    hospital = hospital.select( "-password -__v -refreshtoken -_id" );

    return res
    .status( 200 )
    .json(
        new ApiResponse(
            200, 
            hospital,
            "Current hospital fetched successfully."
        )
    )
} );

export { registerHospital, loginHospital, logoutHospital, getCurrentHospital };