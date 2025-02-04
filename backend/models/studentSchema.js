import mongoose from "mongoose";


const studentSchema = new mongoose.model({
    name: {
        type: String,
        required: true,
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
    },
    grade: {
        type: String,
        required: true,
    },
});

export const Student = mongoose.model('Student', studentSchema)