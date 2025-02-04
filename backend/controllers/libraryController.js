import { Book } from "../models/librarySchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createBook = async (req, res, next) => {
  console.log(req.body);
  const { bookname, author } = req.body;

  try {
    if (!bookname || !author ) {
       return next(new error("Please Fill Full Form!"));
    }

    await Book.create({ bookname, author });
    
  res.status(200).json({
    success: true,
    message: "A new book is Created!",
  });    
} catch (err) {
  next(err);
} 
};

export const getAllBooks= async (req, res, next) => {
  try {
   const books = await Book.find();
  res.status(200).json({
    success: true,
    books,
  });   
} catch (err) {
  next(err);
}
};