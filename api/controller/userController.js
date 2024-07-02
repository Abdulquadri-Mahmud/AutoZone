import jwt  from "jsonwebtoken";
import User from "../models/user.js";
import { errorHandler } from "../utils/errorHanlder.js";
import bcryptjs from 'bcryptjs';

export const signup = async ( req, res, next) => {
    const { username, email, password, avatar } = req.body;
    
    try {
        // get username and check if existing in db
        const checkUsername = await User.findOne({username});
        // get email and check if existing in db
        const checkEmail = await User.findOne({email});

        if (checkUsername) {
            return next(errorHandler(400, 'Username has already been used by another user!'))
        }
        if (checkEmail) {
            return next(errorHandler(400, 'Email has already been used by another user!'));
        }
        
        if (password.length <= 7) {
            return next(errorHandler(400, 'please kindly choose a strong password! max(8)'));
        }

        const hashedPassword =  bcryptjs.hashSync(password, 10);

        const newUser = new User({username, email, password: hashedPassword, avatar});
        
        await newUser.save();
        res.status(200).json('User created successfully!');

    } catch (error) {
        next(error)
    }
};


export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // check if email is valid...
        const validEmail = await User.findOne({email});
        // check is email is not valid
        if (!validEmail) {
            return next(errorHandler(404, 'User Not Found!'));
        }

        // check if password is valid
        const validPassword = bcryptjs.compareSync(password, validEmail.password);
        // check is password is not valid
        if (!validPassword) {
            return next(errorHandler(404, 'Wrong Credentials!'));
        }

        const webtoken = jwt.sign({id: validEmail._id}, process.env.JWT_SERVICES);

        const {password: pass, ...rest} = validEmail._doc;

        res.cookie('access_token', webtoken, {httpOnly : true}).status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

export const signOut = async (req, res, next) => {
    try {
        res.clearCookie('access_token');
        res.status(200).json('Signed Out!');
    } catch (error) {
        next(error)
    }
}