/**
 * The function `connectDB` connects to a MongoDB database named `taskdb` running on localhost.
 */
import mongose from 'mongoose';

export const connectDB = async () => {

    try {
        
        await mongose.connect('mongodb://localhost/taskdb');

    } 
    catch (error) {
        
        console.error(`Error: ${error.message}`);
        process.exit(1);

    }

};
