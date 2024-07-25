import express from 'express'
import { carListController,
    getAllCarsControllers,
    getSingleCarlist,
    searchCar 
}from '../controller/car-list.controller.js';

const app = express();

app.post('/uploadcar', carListController);
app.get('/allcarlists', getAllCarsControllers);
app.get('/singlecarlists/:id', getSingleCarlist);
app.get('/search-car', searchCar);

export default app;