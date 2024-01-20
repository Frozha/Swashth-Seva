import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    company: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
        index: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String
    }
}, { timestamps:true });

hospitalSchema.pre( 'save', async function( next ){
    if( !this.isModified( "password" ) ) return next();

    this.password = await bcrypt.hash( this.password, 10 );
    next();
} );

hospitalSchema.methods.isPasswordCorrect = async function( enteredPassword ){
    return await bcrypt.compare( enteredPassword, this.password );
};

hospitalSchema.methods.generateRefreshToken = async function(){
    return jwt.verify(
        {
            _id: this._id,
            name: this.name,
            company,
            city,
            email,
            phone   
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
};

hospitalSchema.methods.generateAccessToken = async function(){
    return jwt.verify(
        {
            _id,
        },
        process.env.REFRESH_ACCESS_TOKEN,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
};

export const Hospital = mongoose.model( "Hospital", hospitalSchema );