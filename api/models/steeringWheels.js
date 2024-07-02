import mongoose from "mongoose";

var steeringWheelsSchema = new mongoose.Schema({
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
    SteeringWheelsImage:{
        type: [], 
        required: true
    },
}, {timestamps: true});

const SteeringWheel = mongoose.model('Steering Wheels', steeringWheelsSchema);

export default SteeringWheel