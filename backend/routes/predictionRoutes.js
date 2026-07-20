import express from "express";

import {
predictStudent,
batchPredictAll
}
from "../controllers/predictionController.js";


const router=express.Router();


router.post("/",predictStudent);
router.post("/batch", batchPredictAll);



export default router;
