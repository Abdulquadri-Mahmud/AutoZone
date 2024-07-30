 import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser'

import blogRoute from './routes/blogRoutes.js';
import userAuthentication from './routes/userRoutes.js';
import users from './routes/user.routes.js';
import admin from './routes/admin.js';

import carList from './routes/car-route.js';
import carAccessories from './routes/Accessory-Route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.db)
    .then((response) => {
        console.log('Database connected');
        app.listen(process.env.port, () => {
            console.log(`Server is listening on port ${process.env.port}`);
        })
    }).catch((error) => {
        console.log(error);
    });

    app.use('/api/blogs', blogRoute);
    app.use('/api/cars', carList);

    app.use('/api/accessories', carAccessories);

    app.use('/api/auth', userAuthentication);
    app.use('/api/user', users);
    app.use('/api/adminauth', admin);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!'

    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    });
});