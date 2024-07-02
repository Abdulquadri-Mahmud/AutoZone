import mongoose from "mongoose";

var CarCoverSchema = new mongoose.Schema({
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
    CarCoverImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const CarCover = mongoose.model('CarCover', CarCoverSchema);

export default CarCover;