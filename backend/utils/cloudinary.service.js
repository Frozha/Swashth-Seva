import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { CLOUD_NAME } from '../constants.js'
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async ( localPath ) => {
    try {
        if(!localPath){
            console.log("Couldnot find the path.");
            return null;
        }


        const response = await cloudinary.uploader.upload( localPath, {
            resource_type: "auto"
        } );


        fs.unlinkSync( localPath );
        return response;
    } catch (error) {
        fs.unlinkSync(localPath);
        console.log(`Error occured while uploading on cloudinary. Error ${error.message}.`);
        return null;       
    }
};

const deleteFromCloudinary = async ( imagePublicID ) => {
    try {
        if( !imagePublicID ){
            console.log("Public ID of the image couldnot be found.");
            return null;
        }

        const response = await cloudinary.uploader.destroy( imagePublicID, ( error ) => {
            if( error ){
                console.log(`Error occured while deleting the image from cloudinary. Error: ${error.message}.`);
                return null;
            }
        } );

        return response;

    } catch (error) {
        console.log(`Error deleting from cloudinary. Error: ${error.message}.`);
        return null;
    }
};

export { uploadOnCloudinary, deleteFromCloudinary };