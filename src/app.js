import express from'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app= express();
app.use(cors());//cors setup security
app.use(express.json({limit: "16kb"}));// to handle form data
app.use(express.urlencoded({extended: true, limit: "16kb"}));// to handle url queries specifically the parameters in it.
//we no longer have to use body parser as json is now automatically read by express
app.use(express.static("public"));//for static files images videos etc.
app.use(cookieParser());//handle access and create cookies




export { app };