import mongoose from "mongoose";
import CarLists from "../models/car-model.js";
import { errorHandler } from "../utils/errorHanlder.js";

export const carListController = async (req, res, next) => {
    
    const {
        name, condition,make,model, location, price, miles,deal,
        year,driveTrain, fuelEfficiency, fuelType, exteriorColor,interiorColor,
        transmission, engineSize,engine ,waranty,seatingCapacity,description, carimage
    } = req.body;
        
    try {
        const newCar = await CarLists.create({
            name, condition, make, model, location, price,miles, deal, 
            year,driveTrain, fuelEfficiency, fuelType,exteriorColor,interiorColor,
            transmission, engineSize,engine ,waranty,seatingCapacity,description, carimage
        });

        await newCar.save();

        res.status(201).json('Car List Created!');
        
    } catch (error) {
        next(error)
    }
}

export const getAllCarsControllers = async (req, res, next) => {
    const limit = parseInt(req.query.limit) || 6;
    const startIndex = parseInt(req.query.startIndex) || 0;


    try {
        const allCars = await CarLists.find({}).sort({createdAt: -1}).limit(limit).skip(startIndex);

        res.status(200).json(allCars);
    } catch (error) {
        next(error)
    }
}

// getting all cars for dashboard
export const getAllCars = async (req, res, next) => {
    try {
        const allCars = await CarLists.find({}).sort({createdAt: -1});

        res.status(200).json(allCars);
    } catch (error) {
        next(error)
    }
}

export const getSingleCarlist = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Car Not Found!'));
        }

        const getCar = await CarLists.findById(id);
        if (!getCar) {
            return next(errorHandler(404, 'Car Not Found!'));
        }

        res.status(200).json(getCar);
    } catch (error) {
        next(error)
    }
}

export const deleteCar = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Car can not be found!'))
        }

        const findCar = await CarLists.findOneAndDelete({_id: id});

        if (!findCar) {
            return next(errorHandler(404, 'Car Not Found!'));
        }

        res.status(200).json('Car deleted successfully!');

    } catch (error) {
        next(error);
    }
}

export const updateCar = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            next(errorHandler(404, 'Car can nt be found!'));
        }

        const findCar = await CarLists.findOneAndUpdate({_id: id}, {...req.body}).sort({createdAt : -1});

        if (!findCar) {
            return next(errorHandler(404, 'Car is not found!'));
        }

        res.status(200).json('Car has been updated!');

    } catch (error) {
        next(error);
    }
}

export const searchCar = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 6;

        const startIndex = parseInt(req.query.startIndex) || 0;

        const searchTerm = req.query.searchTerm || '';

        const condition = req.query.condition || '';

        const make = req.query.make || '';

        const model = req.query.model || '';

        const location = req.query.location || '';

        const year = req.query.year || '';

        const exteriorColor = req.query.exteriorColor || '';

        const interiorColor = req.query.interiorColor || '';

        const transmission = req.query.transmission || '';

        let sort = req.query.sort || 'createdAt';

        let order = req.query.order || 'desc';

        // get cars 
        const getCar = await CarLists.find({
            name: { $regex: searchTerm, $options: 'i'},
            condition: { $regex: condition, $options: 'i'},
            make: { $regex: make, $options: 'i'},
            model: { $regex: model, $options: 'i'},
            location: { $regex: location, $options: 'i'},
            // year: { $regex: year},
            exteriorColor: { $regex: exteriorColor, $options: 'i'},
            interiorColor: { $regex: interiorColor, $options: 'i'},
            transmission: { $regex: transmission, $options: 'i'},
        }).sort({
            [sort]: order
        }).limit(limit).skip(startIndex);

        return res.status(200).json(getCar);

    } catch (error) {
        next(error)
    }
}