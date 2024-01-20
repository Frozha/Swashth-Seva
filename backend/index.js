import dotenv from 'dotenv';

dotenv.config({
    path: '../.env',
})

import { app } from './app.js';
import connectDB from './db/index.js';

const PORT = process.env.PORT || 3000;

connectDB()
.then( () => {
    app.on( 'error', ( error ) => {
        console.log("The app could not communicate with the database.");
        process.exit(1);
    } );
    app.listen( PORT, () => {
        console.log(`The app is up and running at ${PORT}`);
    } );
} )
.catch( ( error ) => {
    console.log(`MongoDB connection failed. Error ${error.message}.`);
} );