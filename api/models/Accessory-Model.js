import mongoose from "mongoose";

var accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
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
    screenSize: {
        type: String,
        required: true
    },
    specialFeatures: {
        type: String,
    },
    connectivityTech: {
        type: String,
    },
    descriptions:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    prevprice:{
        type: Number,
        required: true
    },
    deal:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    accessoryImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const Accessory = mongoose.model('Car-Accessory', accessorySchema);

export default Accessory;