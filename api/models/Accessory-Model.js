import mongoose from "mongoose";

var accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    condition: {
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
    location: {
        type: String,
        required: true
    },
    waranty: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    screenSize: {
        type: String,
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
        type: String,
        required: true
    },
    prevprice:{
        type: String,
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