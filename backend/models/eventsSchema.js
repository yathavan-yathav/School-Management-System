import mongoose from "mongoose";



const eventsSchema = new mongoose.Schema({
    events: {
        type: String,
        required: true,
    },

});

export const Events = mongoose.model('Events', eventsSchema);