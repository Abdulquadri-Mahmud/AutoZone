import mongoose from "mongoose";

var amplifierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    year: {
        type: String,
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
    amplifierImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const Amplifier = mongoose.model('amplifier', amplifierSchema);

export default Amplifier;