import mongoose from "mongoose";
import validator from "validator";

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowwercase: true,
        validate: [validator.isEmail,"Please provide a valid email"],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});

export const AdminLogin = mongoose.model('Admin Login', usersSchema);
export const Student = mongoose.model('Student Login', usersSchema);
export const Teacher = mongoose.model('Teacher Login', usersSchema);