import express from 'express';
import { 
    stereoAccessory,
    speakerAccessory,
    amplifierAccessory,
    subwooferAccessory,
    bumpersAccessory,
    doorsAccessory,
    fenderAccessory,
    grillAccessory,
    hoodsAccessory,
    customGrillAccessory,
    carCoverAccessory,
    bodyKitAccessory,
    offRoadBumpersAccessory,

// -----------------------------------------------------------------------Get Accessories Controller----------------------------------------------------------
    getAllStereo,
    getAllSpeaker,
    getAllAmplifier,
    getAllSubwoofer,
    getAllBumper,
    getAllFender,
    getAllGrill,
    getAllHoods,
    getAllBodyKit,
    getAllCustomGrill,
    getAllCarCover,
    getAllOffRoadBumper,
    getAllDoor,
    customGauges,
    dashKit,
    seatCover,
    steeringwheels,
    sunShades,
    getAllCustomGauges,
    getAllDashKits,
    getAllSeatCover,
    getAllSteeringWheels,
    getAllSunShades,

    getAllFogLight,
    FogLights,
    LedLights,
    HeadLights,
    offRoadLight,
    signalLight,
    getAllHeadlight,
    getAllLedLight,
    getAllOffRoadLight,
    getAllSignalLight,

    deleteStereo,
    deleteSpeaker,
    deleteAmplifier,
    deleteSubwoofer,
    deleteBumper,
    deleteDoor,
    deleteFender,
    deleteGrill,
    deleteHoods,
    deleteBodyKit,
    deleteCustomGrill,
    deleteCarCover,
    deleteOffRoadBumper,
    deleteCustomGauges,
    deleteDashKits,
    deleteSeatCover,
    deleteSteeringWheels,
    deleteSunShades,
    deleteFogLight,
    deleteHeadlight,
    deleteLedLight,
    deleteOffRoadLight,
    deleteSignalLight,

    getStereo,
    getSpeaker,
    getAmplifier,
    getSubwoofer,
    getBumper,
    getDoor,
    getFender,
    getBodyKit,
    getCustomGrill,
    getCarCover,
    getGrill,
    getOffRoadBumper,
    getCustomGauges,
    getDashKits,
    getSteeringWheels,
    getSunShades,
    getFogLight,
    getHeadlight,
    getLedLight,
    getOffRoadLight,
    getSignalLight,
    getHoods,
    
} from '../controller/accessories-controller.js';
import { verifyAdmin } from '../utils/verifyUserError.js';

const app = express();
// -----------------------------------------------------------------------POST Accessories Request----------------------------------------------------------

app.post('/car-stereo', stereoAccessory);
app.post('/car-speaker', speakerAccessory);
app.post('/car-amplifier', amplifierAccessory);
app.post('/car-subwoofer', subwooferAccessory);

app.post('/car-bumper', bumpersAccessory);
app.post('/car-door', doorsAccessory);
app.post('/car-fender', fenderAccessory);
app.post('/car-grill', grillAccessory);
app.post('/car-hood', hoodsAccessory);

app.post('/car-body-kit', bodyKitAccessory);
app.post('/car-custom-grill', customGrillAccessory);
app.post('/car-car-cover', carCoverAccessory);
app.post('/car-offroadbumber', offRoadBumpersAccessory);

app.post('/car-custom-gauges', customGauges);
app.post('/car-dash-kits', dashKit);
app.post('/car-seat-cover', seatCover);
app.post('/car-steeringwheels', steeringwheels);
app.post('/car-sunshades', sunShades);

app.post('/car-foglight', FogLights);
app.post('/car-ledlight', LedLights);
app.post('/car-headlight', HeadLights);
app.post('/car-offroadlight', offRoadLight);
app.post('/car-signallight', signalLight);

// -----------------------------------------------------------------------Get Accessories Request----------------------------------------------------------
app.get('/car-stereo', getAllStereo);
app.get('/car-speaker', getAllSpeaker);
app.get('/car-amplifier', getAllAmplifier);
app.get('/car-subwoofer', getAllSubwoofer);
app.get('/car-bumper', getAllBumper);

app.get('/car-door', getAllDoor);
app.get('/car-fender', getAllFender);
app.get('/car-grill', getAllGrill);
app.get('/car-hoods', getAllHoods);

app.get('/car-body-kit', getAllBodyKit);
app.get('/car-custom-grill', getAllCustomGrill);
app.get('/car-car-cover', getAllCarCover);
app.get('/car-offroadbumber', getAllOffRoadBumper);

app.get('/car-custom-gauges', getAllCustomGauges);
app.get('/car-dash-kits', getAllDashKits);
app.get('/car-seat-cover', getAllSeatCover);
app.get('/car-steeringwheels', getAllSteeringWheels);
app.get('/car-sunshades', getAllSunShades);

app.get('/car-foglight', getAllFogLight);
app.get('/car-headlight', getAllHeadlight);
app.get('/car-ledlight', getAllLedLight);
app.get('/car-offroadlight', getAllOffRoadLight);
app.get('/car-signallight', getAllSignalLight);

// -----------------------------------------------------------------------Delete Accessories Request----------------------------------------------------------
app.get('/car-stereo/:id', getStereo);
app.get('/car-speaker/:id', getSpeaker);
app.get('/car-amplifier/:id', getAmplifier);
app.get('/car-subwoofer/:id', getSubwoofer);
app.get('/car-bumper/:id', getBumper);

app.get('/car-door/:id', getDoor);
app.get('/car-fender/:id', getFender);
app.get('/car-grill/:id', getGrill);
app.get('/car-hood/:id', getHoods);

app.get('/car-body-kit/:id', getBodyKit);
app.get('/car-custom-grill/:id', getCustomGrill);
app.get('/car-car-cover/:id', getCarCover);
app.get('/car-offroadbumper/:id', getOffRoadBumper);

app.get('/car-custom-gauges/:id', getCustomGauges);
app.get('/car-dash-kits/:id', getDashKits);
app.get('/car-seat-cover/:id', getAllSeatCover);
app.get('/car-steeringwheel/:id', getSteeringWheels);
app.get('/car-sunshade/:id', getSunShades);

app.get('/car-foglight/:id', getFogLight);
app.get('/car-headlight/:id', getHeadlight);
app.get('/car-ledlight/:id', getLedLight);
app.get('/car-offroadlight/:id', getOffRoadLight);
app.get('/car-signallight/:id', getSignalLight);

// -----------------------------------------------------------------------Delete Accessories Request----------------------------------------------------------
app.delete('/car-stereo/:id',verifyAdmin, deleteStereo);
app.delete('/car-speaker/:id',verifyAdmin, deleteSpeaker);
app.delete('/car-amplifier/:id',verifyAdmin, deleteAmplifier);
app.delete('/car-subwoofer/:id',verifyAdmin, deleteSubwoofer);

app.delete('/car-bumper/:id',verifyAdmin, deleteBumper);
app.delete('/car-door/:id',verifyAdmin, deleteDoor);
app.delete('/car-fender/:id',verifyAdmin, deleteFender);
app.delete('/car-grill/:id',verifyAdmin, deleteGrill);
app.delete('/car-hoods/:id',verifyAdmin, deleteHoods);

app.delete('/car-body-kit/:id',verifyAdmin, deleteBodyKit);
app.delete('/car-custom-grill/:id',verifyAdmin, deleteCustomGrill);
app.delete('/car-car-cover/:id',verifyAdmin, deleteCarCover);
app.delete('/car-offroadbumber/:id',verifyAdmin, deleteOffRoadBumper);

app.delete('/car-custom-gauges/:id',verifyAdmin, deleteCustomGauges);
app.delete('/car-dash-kits/:id',verifyAdmin, deleteDashKits);
app.delete('/car-seat-cover/:id',verifyAdmin, deleteSeatCover);
app.delete('/car-steeringwheels/:id',verifyAdmin, deleteSteeringWheels);
app.delete('/car-sunshades/:id',verifyAdmin, deleteSunShades);

app.delete('/car-foglight/:id',verifyAdmin, deleteFogLight);
app.delete('/car-headlight/:id',verifyAdmin, deleteHeadlight);
app.delete('/car-ledlight/:id',verifyAdmin, deleteLedLight);
app.delete('/car-offroadlight/:id',verifyAdmin, deleteOffRoadLight);
app.delete('/car-signallight/:id',verifyAdmin, deleteSignalLight);

 
export default app;