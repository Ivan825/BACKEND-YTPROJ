 import mongoose from 'mongoose';
 import { DB_NAME } from '../constants.js';

 const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);//will create a db with name in DB_NAME if not in cluster
       console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB CONNECTION FAILED: ",error);
        process.exit(1);
    }
 }

 export default connectDB;