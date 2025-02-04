import mongoose from "mongoose";


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