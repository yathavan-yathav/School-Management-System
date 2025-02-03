import mongoose from "mongoose";
import validator from "validator";

const teacherSchema = new mongoose.model({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subject: {
        type: String,
        required: true,
    },
});

export const Teacher = mongoose.model('Teacher', teacherSchema)