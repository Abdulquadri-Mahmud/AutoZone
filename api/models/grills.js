import mongoose from "mongoose";

var grillSchema = new mongoose.Schema({
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
    GrillsImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const Grill = mongoose.model('Grill', grillSchema);

export default Grill;