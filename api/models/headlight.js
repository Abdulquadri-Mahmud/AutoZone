import mongoose from "mongoose";

var headLightSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
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
    HeadLightImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const HeadLight = mongoose.model('headLight', headLightSchema);

export default HeadLight;