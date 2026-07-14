import express from "express";

import {
predictStudent
}
from "../controllers/predictionController.js";


const router=express.Router();


router.post("/",predictStudent);



export default router;