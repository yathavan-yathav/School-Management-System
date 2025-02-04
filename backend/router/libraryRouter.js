import express from "express";
import { getAllBooks , createBook } from "../controllers/libraryController.js";

const router = express.Router();

router.get('/getall', getAllBooks);
router.post('/',createBook);

export default router;
