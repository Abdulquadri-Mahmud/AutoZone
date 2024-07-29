import bcryptjs from 'bcryptjs';
import Admin from '../models/admin.js';
import { errorHandler } from '../utils/errorHanlder.js';
import jwt from 'jsonwebtoken';

export const adminController = async (req, res, next) => {

    const {email, password} = req.body;

    try {
        // getting the admin password from the .env file;
        // const adminemail = process.env.AdminEmail;
        // const adminpassword = process.env.AdminPassword;

        // hashin gthe admin password
        const hashedPassword = bcryptjs.hashSync(password, 10);

        // pushing the admin email and password into the db
        const admin = new Admin({email: email, password: hashedPassword});
        //  saving the admin email and password to the db
        await admin.save();

        res.status(200).json('admin created successfully!');

    } catch (error) {
        next(error);
    }
}

export const adminSignIn = async (req, res, next) => {
    
    const {email, password} = req.body;

    try {
        // check if admin email exist in db
        const validEmail = await Admin.findOne({email});
        // check if email is valid
        if (!validEmail) {
            return next(errorHandler(404, 'Admin Not Found!'));
        }
        // comapring password
        const validPassword = bcryptjs.compareSync(password, validEmail.password);

        // now check if admin password is valid
        if (!validPassword) {
            return next(errorHandler(404, 'Wrong Credential!'));
        }

        const webtoken = jwt.sign({id: validEmail._id}, process.env.JWT_SERVICES);

        // separating the admin password
        const {password: pass, ...rest } = validEmail._doc;

        res.cookie('access_admin_token', webtoken, {httpOnly: true}).status(200).json(rest)

    } catch (error) {
        next(error)
    }
}