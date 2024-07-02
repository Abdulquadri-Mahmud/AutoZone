import mongoose from "mongoose";

var subwooferSchema = new mongoose.Schema({
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
    subwooferImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const Subwoofer = mongoose.model('Subwoofer', subwooferSchema);

export default Subwoofer;