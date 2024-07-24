import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected Successfully!! \n Your DB Host: ${connectionInstance.connection.host}`);
    }
    catch(error) {
        console.log("MongoDB connection FAILED: ", error);
        // throw error;
        process.exit();
    }
}

export default connectDB;