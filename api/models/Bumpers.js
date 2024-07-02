import mongoose from "mongoose";

var bumperSchema = new mongoose.Schema({
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
    BumperImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const Bumper = mongoose.model('Bumper', bumperSchema);

export default Bumper;