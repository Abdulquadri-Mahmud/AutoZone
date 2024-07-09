import mongoose from "mongoose";
import CarLists from "../models/car-model.js";
import { errorHandler } from "../utils/errorHanlder.js";

export const carListController = async (req, res, next) => {
    
    const {
        name, condition,make,model, location, price, miles,colors,deal,
        year, description, exteriorColor,interiorColor, transmission,engine , carimage
    } = req.body;
        
    try {
        const newCar = await CarLists.create({
            name, condition, make, model, location, price,miles, colors, deal, 
            year, description,exteriorColor,interiorColor, transmission,engine , carimage
        });

        await newCar.save();

        res.status(201).json('Car List Created!');
        
    } catch (error) {
        next(error)
    }
}

export const getAllCarsControllers = async (req, res, next) => {
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