import Stereo from "../models/StereoAccessories.js";
import Speaker from "../models/speakerAccessories.js";
import Amplifire from "../models/amplifire.js";
import Subwoofer from "../models/subwoofers.js";
import Bumper from "../models/Bumpers.js";
import Door from "../models/door.js";
import Fender from "../models/fenders.js";
import Grill from "../models/grills.js";
import Hoods from "../models/Hoods.js";
import BodyKit from "../models/bodyKit.js";
import CustomGrill from "../models/customGrills.js";
import CarCover from "../models/carCovers.js";
import OffRoadBumper from "../models/offRoadBumpers.js";
import CustomGauges from "../models/customGauges.js";
import DashKits from "../models/dashkit.js";
import SeatCover from "../models/seatcover.js";
import SteeringWheels from "../models/steeringWheels.js";
import SunShades from "../models/sunShades.js";

import fogLight from "../models/foglight.js";
import LedLight from "../models/ledLight.js";
import HeadLight from "../models/headlight.js";
import OffRoadLight from "../models/offroadlight.js";
import SignalLight from "../models/signallight.js";
import mongoose from "mongoose";
import { errorHandler } from "../utils/errorHanlder.js";
import Amplifier from "../models/amplifire.js";

export const stereoAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,prevprice,
        deal,steroeImage
    } = req.body;

    try {
        
        const stereoAccessory = await Stereo.create({
            name,make,model,prevprice, year,category, descriptions, price, deal,steroeImage
        });

        await stereoAccessory.save();

        res.status(201).json('Steroe Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}

export const speakerAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,speakerImage
    } = req.body;

    try {
        
        const speakerAccessory = await Speaker.create({
            name,make, model, year,category, 
            descriptions, price, deal,speakerImage
        });

        await speakerAccessory.save();

        res.status(201).json('Speaker Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const amplifierAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,amplifierImage
    } = req.body;

    try {
        
        const amplifireAccessory = await Amplifire.create({
            name,make, model, year,category, 
            descriptions, price, deal,amplifierImage
        });

        await amplifireAccessory.save();

        res.status(201).json('Amplifier Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}

export const subwooferAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,subwooferImage
    } = req.body;

    try {
        
        const subwooferAccessory = await Subwoofer.create({
            name,make, model, year,category, 
            descriptions, price, deal,subwooferImage
        });

        await subwooferAccessory.save();

        res.status(201).json('Subwoofer Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}

export const bumpersAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,BumperImage
    } = req.body;

    try {
        
        const bumpersAccessory = await Bumper.create({
            name,make, model, year,category, 
            descriptions, price, deal,BumperImage
        });

        await bumpersAccessory.save();

        res.status(201).json('Bumper Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const doorsAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,DoorImage
    } = req.body;

    try {
        
        const doorsAccessory = await Door.create({
            name,make, model, year,category, 
            descriptions, price, deal,DoorImage
        });

        await doorsAccessory.save();

        res.status(201).json('Door Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const fenderAccessory = async (req, res, next) => {
    const { 
        name,make,model, year,category,
        descriptions, price,
        deal,FenderImage
    } = req.body;

    try {
        
        const fenderAccessory = await Fender.create({
            name,make, model, year,category, 
            descriptions, price, deal,FenderImage
        });

        await fenderAccessory.save();

        res.status(201).json('Fender Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const grillAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,GrillsImage
    } = req.body;

    try {
        
        const grillAccessory = await Grill.create({
            name,make,model, year,category, 
            descriptions, price, deal,GrillsImage
        });

        await grillAccessory.save();

        res.status(201).json('Model Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}


export const hoodsAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,HoodsImage
    } = req.body;

    try {
        
        const hoodsAccessory = await Hoods.create({
            name,make, model, year,category, 
            descriptions, price, deal,HoodsImage
        });

        await hoodsAccessory.save();

        res.status(201).json('Hood Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}


export const bodyKitAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,BodyKitImage
    } = req.body;

    try {
        
        const bodyKitAccessory = await BodyKit.create({
            name,make, model, year,category, 
            descriptions, price, deal,BodyKitImage
        });

        await bodyKitAccessory.save();

        res.status(201).json('Body Kit Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const customGrillAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,CustomGrillImage
    } = req.body;

    try {
        
        const customGrillAccessory = await CustomGrill.create({
            name,make, model, year,category, 
            descriptions, price, deal,CustomGrillImage
        });

        await customGrillAccessory.save();

        res.status(201).json('custom Grill Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const carCoverAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,CarCoverImage
    } = req.body;

    try {
        
        const carCoverAccessory = await CarCover.create({
            name,make, model, year,category, 
            descriptions, price, deal,CarCoverImage
        });

        await carCoverAccessory.save();

        res.status(201).json('Car Cover Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}

export const offRoadBumpersAccessory = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,OffRoadBumperImage
    } = req.body;

    try {
        
        const offRoadBumpersAccessory = await OffRoadBumper.create({
            name,make, model, year,category, 
            descriptions, price, deal,OffRoadBumperImage
        });

        await offRoadBumpersAccessory.save();

        res.status(201).json('Off-Road Bumper Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const customGauges = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,CustomGaugesImage
    } = req.body;

    try {
        
        const customGauges = await CustomGauges.create({
            name,make, model, year,category, 
            descriptions, price, deal,CustomGaugesImage
        });

        await customGauges.save();

        res.status(201).json('Custom Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const dashKit = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,DashKitImage
    } = req.body;

    try {
        
        const dashKit = await DashKits.create({
            name,make, model, year,category, 
            descriptions, price, deal,DashKitImage
        });

        await dashKit.save();

        res.status(201).json('Dash Kits Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}

export const seatCover = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,SeatCoverImage
    } = req.body;

    try {
        
        const seatCover = await SeatCover.create({
            name,make, model, year,category, 
            descriptions, price, deal,SeatCoverImage
        });

        await seatCover.save();

        res.status(201).json('Seat Cover Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}

export const steeringwheels = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,SteeringWheelsImage
    } = req.body;

    try {
        
        const steeringwheels = await SteeringWheels.create({
            name,make, model, year,category, 
            descriptions, price, deal,SteeringWheelsImage
        });

        await steeringwheels.save();

        res.status(201).json('Steering Wheels Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const sunShades = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,SunShadesImage
    } = req.body;

    try {
        
        const sunShades = await SunShades.create({
            name,make, model, year,category, 
            descriptions, price, deal,SunShadesImage
        });

        await sunShades.save();

        res.status(201).json('Sun Shades Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const FogLights = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,fogLightImage
    } = req.body;

    try {
        
        const FogLight = await fogLight.create({
            name,make, model, year,category, 
            descriptions, price, deal,fogLightImage
        });

        await FogLight.save();

        res.status(201).json('Fog Light Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}
export const LedLights = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,LedLightImage
    } = req.body;

    try {
        
        const newLedLight = await LedLight.create({
            name,make, model, year,category, 
            descriptions, price, deal,LedLightImage
        });

        await newLedLight.save();

        res.status(201).json('Led Light Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}

export const HeadLights = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,HeadLightImage
    } = req.body;

    try {
        
        const newHeadLight = await HeadLight.create({
            name,make, model, year,category, 
            descriptions, price, deal,HeadLightImage
        });

        await newHeadLight.save();

        res.status(201).json('Headlight Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}

export const offRoadLight = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,OffRoadLightImage
    } = req.body;

    try {
        
        const newOffRoadLight = await OffRoadLight.create({
            name,make, model, year,category, 
            descriptions, price, deal,OffRoadLightImage
        });

        await newOffRoadLight.save();

        res.status(201).json('Off-Road Light Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}

export const signalLight = async (req, res, next) => {
    const { 
        name,make, model, year,category,
        descriptions, price,
        deal,SignalLightImage
    } = req.body;

    try {
        
        const newSignalLight = await SignalLight.create({
            name,make, model, year,category, 
            descriptions, price, deal,SignalLightImage
        });

        await newSignalLight.save();

        res.status(201).json('Sun Shades Accessory created successfully!');

    } catch (error) {
        next(error)
    }
}



// ---------------------------------------------------------------------------------------------------Get All Accessories--------------------------------------------------------------------------------------------

export const getAllStereo = async (req, res, next) => {
    try {
        const allStereo = await Stereo.find({}).sort({createdAt: -1});

        res.status(200).json(allStereo);
    } catch (error) {
        next(error)
    }
} 
export const getAllSpeaker = async (req, res, next) => {
    try {
        const allSpeaker = await Speaker.find({}).sort({createdAt: -1});

        res.status(200).json(allSpeaker);
    } catch (error) {
        next(error)
    }
}

export const getAllAmplifier = async (req, res, next) => {
    try {
        const allAmplifire = await Amplifire.find({}).sort({createdAt: -1});

        res.status(200).json(allAmplifire);
    } catch (error) {
        next(error)
    }
}

export const getAllSubwoofer = async (req, res, next) => {
    try {
        const newSubwoofer = await Subwoofer.find({}).sort({createdAt: -1});

        res.status(200).json(newSubwoofer);
    } catch (error) {
        next(error)
    }
}

export const getAllBumper = async (req, res, next) => {
    try {
        const newBumper = await Bumper.find({}).sort({createdAt: -1});

        res.status(200).json(newBumper);
    } catch (error) {
        next(error)
    }
}
export const getAllDoor = async (req, res, next) => {
    try {
        const newDoor = await Door.find({}).sort({createdAt: -1});

        res.status(200).json(newDoor);
    } catch (error) {
        next(error)
    }
}
export const getAllFender = async (req, res, next) => {
    try {
        const newFender = await Fender.find({}).sort({createdAt: -1});

        res.status(200).json(newFender);
    } catch (error) {
        next(error)
    }
}
export const getAllGrill = async (req, res, next) => {
    try {
        const newGrill = await Grill.find({}).sort({createdAt: -1});

        res.status(200).json(newGrill);
    } catch (error) {
        next(error)
    }
}
export const getAllHoods = async (req, res, next) => {
    try {
        const newHoods = await Hoods.find({}).sort({createdAt: -1});

        res.status(200).json(newHoods);
    } catch (error) {
        next(error)
    }
}
export const getAllBodyKit = async (req, res, next) => {
    try {
        const newBodyKit = await BodyKit.find({}).sort({createdAt: -1});

        res.status(200).json(newBodyKit);
    } catch (error) {
        next(error)
    }
}
export const getAllCustomGrill = async (req, res, next) => {
    try {
        const newCustomGrill = await CustomGrill.find({}).sort({createdAt: -1});

        res.status(200).json(newCustomGrill);
    } catch (error) {
        next(error)
    }
}
export const getAllCarCover = async (req, res, next) => {
    try {
        const newCarCover = await CarCover.find({}).sort({createdAt: -1});

        res.status(200).json(newCarCover);
    } catch (error) {
        next(error)
    }
}

export const getAllOffRoadBumper = async (req, res, next) => {
    try {
        const newOffRoadBumper = await OffRoadBumper.find({}).sort({createdAt: -1});

        res.status(200).json(newOffRoadBumper);
    } catch (error) {
        next(error)
    }
}
export const getAllCustomGauges = async (req, res, next) => {
    try {
        const newCustomGauges = await CustomGauges.find({}).sort({createdAt: -1});

        res.status(200).json(newCustomGauges);
    } catch (error) {
        next(error)
    }
}
export const getAllDashKits = async (req, res, next) => {
    try {
        const newDashKits = await DashKits.find({}).sort({createdAt: -1});

        res.status(200).json(newDashKits);
    } catch (error) {
        next(error)
    }
}

export const getAllSeatCover = async (req, res, next) => {
    try {
        const newSeatCover = await SeatCover.find({}).sort({createdAt: -1});

        res.status(200).json(newSeatCover);
    } catch (error) {
        next(error)
    }
}

export const getAllSteeringWheels = async (req, res, next) => {
    try {
        const newSteeringWheels = await SteeringWheels.find({}).sort({createdAt: -1});

        res.status(200).json(newSteeringWheels);
    } catch (error) {
        next(error)
    }
}

export const getAllSunShades = async (req, res, next) => {
    try {
        const newSunShades = await SunShades.find({}).sort({createdAt: -1});

        res.status(200).json(newSunShades);
    } catch (error) {
        next(error)
    }
}
export const getAllFogLight = async (req, res, next) => {
    try {
        const newFogLight = await fogLight.find({}).sort({createdAt: -1});

        res.status(200).json(newFogLight);
    } catch (error) {
        next(error)
    }
}
export const getAllHeadlight = async (req, res, next) => {
    try {
        const newHeadlight = await HeadLight.find({}).sort({createdAt: -1});

        res.status(200).json(newHeadlight);
    } catch (error) {
        next(error)
    }
}

export const getAllLedLight = async (req, res, next) => {
    try {
        const newLedLight = await LedLight.find({}).sort({createdAt: -1});

        res.status(200).json(newLedLight);
    } catch (error) {
        next(error)
    }
}

export const getAllOffRoadLight = async (req, res, next) => {
    try {
        const newOffRoadLight = await OffRoadLight.find({}).sort({createdAt: -1});

        res.status(200).json(newOffRoadLight);
    } catch (error) {
        next(error)
    }
}

export const getAllSignalLight = async (req, res, next) => {
    try {
        const newSignalLight = await SignalLight.find({}).sort({createdAt: -1});

        res.status(200).json(newSignalLight);
    } catch (error) {
        next(error)
    }
}

// ---------------------------------------------------------------------------------------------------Get Single Accessory--------------------------------------------------------------------------------------------
export const getStereo = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await Stereo.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getSpeaker = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await Speaker.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getAmplifier = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await Amplifier.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getSubwoofer = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await Subwoofer.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}

export const getBumper = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await Bumper.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getDoor = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await Door.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}

export const getFender = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await Fender.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getGrill = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await Grill.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}

export const getHoods = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await Hoods.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}

export const getBodyKit = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await BodyKit.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getCustomGrill = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await CustomGrill.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getCarCover = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await CarCover.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getOffRoadBumper = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await OffRoadBumper.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}

export const getCustomGauges = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await CustomGauges.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getDashKits = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await DashKits.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getSteeringWheels = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await SteeringWheels.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getSeatCover = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await SeatCover.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getSunShades = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await SunShades.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getFogLight = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await fogLight.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getHeadlight = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await HeadLight.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getLedLight = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await LedLight.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getOffRoadLight = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await OffRoadLight.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}
export const getSignalLight = async (req, res, next) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        const findId = await SignalLight.findOne({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json(findId);
    } catch (error) {
        next(error)
    }
}

// ---------------------------------------------------------------------------------------------------Delete Accessories--------------------------------------------------------------------------------------------
export const deleteStereo = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Stereo.findByIdAndDelete({_id: id});
        
        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteSpeaker = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Speaker.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteAmplifier = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Amplifier.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}

export const deleteSubwoofer = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Subwoofer.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteBumper = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Bumper.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteDoor = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Door.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteFender = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Fender.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteGrill = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Grill.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteHoods = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await Hoods.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}

export const deleteBodyKit = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await BodyKit.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}

export const deleteCustomGrill = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await CustomGrill.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}

export const deleteCarCover = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await CarCover.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteOffRoadBumper = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await OffRoadBumper.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteCustomGauges = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await CustomGauges.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteDashKits = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await DashKits.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteSeatCover = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await SeatCover.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteSteeringWheels = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await SteeringWheels.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteSunShades = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await SunShades.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteFogLight = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await fogLight.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}
export const deleteHeadlight = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await HeadLight.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}

export const deleteLedLight = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await LedLight.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}

export const deleteOffRoadLight = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await OffRoadLight.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}

export const deleteSignalLight = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Item Not Found!'));
        }
        // find that id in database
        const findId = await SignalLight.findByIdAndDelete({_id: id});

        if (!findId) {
            return next(errorHandler(404, 'Item Not Found!'))
        }
        res.status(200).json('Item has been deleted!')

    } catch (error) {
        next(error)
    }
}