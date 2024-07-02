import mongoose from "mongoose";

var seatCoverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    descriptions:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    deal:{
        type: String,
        required: true
    },
    SeatCoverImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const SeatCover = mongoose.model('seatCover', seatCoverSchema);

export default SeatCover;