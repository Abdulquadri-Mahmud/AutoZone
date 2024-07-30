import Accessory from "../models/Accessory-Model.js";
import { errorHandler } from "../utils/errorHanlder.js";

export const createAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,screenSize,
        descriptions, price,connectivityTech,prevprice,specialFeatures,
        deal,quantity,accessoryImage
    } = req.body;

    try {
        
        const stereoAccessory = await Accessory.create({
            name,make,model,prevprice,specialFeatures, year,category, screenSize,
            descriptions, price,connectivityTech, deal,quantity,accessoryImage
        });

        await stereoAccessory.save();

        res.status(201).json('Accessory created successfully!');
    } catch (error) {
        next(error)
    }
}

export const getAllAccessory = async (req, res, next) => {
    try {
        const allAccessories = await Accessory.find({}).sort({createdAt: -1});

        res.status(200).json(allAccessories);
    } catch (error) {
        next(error)
    }
}

export const getSinglAccessory = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await Accessory.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}

export const deleteAccessory = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Accessory.findByIdAndDelete({_id: id});
        
        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}

export const updateAccessory = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Accessory.findOneAndUpdate({_id: id}, {...req.body});
        
        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been updated!')

    } catch (error) {
        next(error)
    }
}