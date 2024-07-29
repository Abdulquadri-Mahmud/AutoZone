import mongoose from "mongoose";

var carSalesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    condition: {
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
    price: {
        type: String,
        required: true
    },
    miles: {
        type: String,
        required: true
    },
    deal: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    driveTrain: {
        type: String,
        required: true
    },
    fuelEfficiency: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    exteriorColor: {
        type: String,
        required: true
    },
    interiorColor: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    engineSize: {
        type: String,
    },
    waranty: {
        type: String,
        required: true
    },
    seatingCapacity: {
        type: String,
        required: true
    },
    carimage: {
        type: [],
        required: true
    }
}, {timestamps: true});

const CarLists = mongoose.model('CarList', carSalesSchema);

export default CarLists;