import express from "express";
import {getAllExams, createExam } from "../controllers/examController.js";

const router = express.Router();

router.get('/getall', getAllExams);
router.post('/', createExam);

export default router;