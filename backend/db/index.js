import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'

async function connectDB(){
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMongoose connected!!! DB NAME: ${connectInstance.connection.host}`);
    } catch (error) {
        console.log("Error connecting the database. Error ", error.message, "." );
        process.exit(1);
    }
}

export default connectDB;