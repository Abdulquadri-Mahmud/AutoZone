import mongoose from "mongoose";

var offRoadLightSchema = new mongoose.Schema({
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
    OffRoadLightImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const OffRoadLight = mongoose.model('offroadLight', offRoadLightSchema);

export default OffRoadLight;