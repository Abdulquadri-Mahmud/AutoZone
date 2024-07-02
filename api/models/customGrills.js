import mongoose from "mongoose";

var customGrillSchema = new mongoose.Schema({
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
    CustomGrillImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const CustomGrill = mongoose.model('CustomGrill', customGrillSchema);

export default CustomGrill;