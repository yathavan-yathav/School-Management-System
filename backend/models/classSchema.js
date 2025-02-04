import mongoose from "mongoose";



const classSchema = new mongoose.Schema({
    grade: {
        type: String,
        required: true,
    },

});

export const Class = mongoose.model('Class', classSchema);