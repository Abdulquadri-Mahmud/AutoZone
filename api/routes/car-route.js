import express from 'express'
import { carListController,
    deleteCar,
    getAllCars,
    getAllCarsControllers,
    getSingleCarlist,
    searchCar, 
    updateCar
}from '../controller/car-list.controller.js';
import { verifyAdmin } from '../utils/verifyUserError.js';

const app = express();

app.post('/uploadcar', verifyAdmin,carListController);
app.get('/allcarlists',getAllCarsControllers);
app.get('/allcar',verifyAdmin, getAllCars);
app.get('/singlecarlists/:id', getSingleCarlist);
app.get('/search-car', searchCar);

app.patch('/update-car/:id',verifyAdmin, deleteCar)
app.delete('/delete-car/:id',verifyAdmin, updateCar)

export default app;