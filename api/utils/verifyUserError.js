import jwt from 'jsonwebtoken';
import { errorHandler } from './errorHanlder.js';

export const verifyToken = (req, res, next) => {
    // accessing token
    const userToken = req.cookies.access_token;

    // if user token is not found 
    if(!userToken){
        return next(errorHandler(403, 'Unauthorized!'));
    }

    // but if it is found the we verify the user token
    jwt.verify(userToken, process.env.JWT_SERVICES, (err, user) => {
        // if there is an error
        if(err){
            return next(errorHandler(403, 'Forbidden!'));
        }
        // else get user
        req.user = user;
        next();
    })

}

export const verifyAdmin = (req, res, next) => {
    const adminToken = req.cookies.access_admin_token;

    if (!adminToken) {
        return next(errorHandler(404, 'Unauthorizes!'));
    }

    jwt.verify(adminToken, process.env.JWT_SERVICES, (err, admin) => {
        if (err) {
            return next(errorHandler(403, 'Forbidden!'));
        }

        req.admin = admin;

        next();
    })
}