import mongoose from "mongoose";

var dashKitsSchema = new mongoose.Schema({
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
    DashKitImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const DashKits = mongoose.model('DashKit', dashKitsSchema);

export default DashKits;