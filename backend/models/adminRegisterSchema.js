import mongoose from "mongoose";
import validator, { isLowercase } from "validator";

const adminRegisterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    },
});

export const Admin = mongoose.model('Admin Register', adminRegisterSchema);