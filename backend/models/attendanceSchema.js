import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
        required: true,
    },
    status: {
        type: String,
        enum: ['Present','Absent'],
        required: true,
    },
});

export default mongoose.model('Attendance', attendanceSchema);