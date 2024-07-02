import express from 'express'
import { carListController, getAllCarsControllers, getSingleCarlist } from '../controller/car-list.controller.js';

const app = express();

app.post('/carlists', carListController);
app.get('/allcarlists', getAllCarsControllers);
app.get('/singlecarlists/:id', getSingleCarlist);

export default app;