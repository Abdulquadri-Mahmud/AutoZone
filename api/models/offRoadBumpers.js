import mongoose from "mongoose";

var OffRoadBumperSchema = new mongoose.Schema({
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
    OffRoadBumperImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const OffRoadBumper = mongoose.model('OffRoadBumper', OffRoadBumperSchema);

export default OffRoadBumper;