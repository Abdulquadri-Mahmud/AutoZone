import express from 'express'
import { carListController,
    getAllCars,
    getAllCarsControllers,
    getSingleCarlist,
    searchCar 
}from '../controller/car-list.controller.js';
import { verifyAdmin } from '../utils/verifyUserError.js';

const app = express();

app.post('/uploadcar', verifyAdmin,carListController);
app.get('/allcarlists', verifyAdmin,getAllCarsControllers);
app.get('/allcar', getAllCars);
app.get('/singlecarlists/:id', getSingleCarlist);
app.get('/search-car', searchCar);

export default app;