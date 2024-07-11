import 'dotenv/config';
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import {app} from "./app.js";

connectDB()// connects to database which ia async request hence it returna a promise so we can use then
.then(()=>{// starts the server on succesfull connection to database
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
    app.on("error",(error)=>{ // listens for errors
        console.log("ERROR: ",error);
        throw error;
    });
})
.catch((error)=>{
    console.error("MONGODB CONNECTION FAILED: ",error);
});