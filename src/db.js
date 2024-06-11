
import mongoose from 'mongoose';

export const connectDB = async () => {

    try {
        
        await mongoose.connect('mongodb://localhost/taskdb');
        console.log('Connected to MongoDB');

    } 
    catch (error) {
        
        console.error(`Error: ${error.message}`);
        process.exit(1);

    }

};
