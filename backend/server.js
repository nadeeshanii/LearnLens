import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import studentRoutes from "./routes/studentRoutes.js";
import predictionRoutes from "./routes/predictionRoutes.js";


dotenv.config();


const app=express();



connectDB();



app.use(cors());

app.use(express.json());



// Routes

app.use(
"/api/students",
studentRoutes
);


app.use(
"/api/predict",
predictionRoutes
);



app.get("/",(req,res)=>{

    res.json({
        message:"Learn Lens Backend Running 🚀"
    });

});



const PORT=process.env.PORT || 5000;


app.listen(PORT,()=>{

console.log(`Server running on port ${PORT}`);

});