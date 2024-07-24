import User from "../models/user.js";
import { errorHandler } from "../utils/errorHanlder.js";
import bcryptjs from 'bcryptjs';

export const updateUser = async (req, res, next) => {
    // get user schema
    const { username, email, password, avatar} = req.body;

    // check duplicate schema;
    // const checkUsername = await User.findOne({username});
    // const checkEmail = await User.findOne({email});
    // if (checkUsername) {
    //     return next(errorHandler(403, 'Username already in used!'));
    // }
    // if (checkEmail) {
    //     next(errorHandler(403, 'Email already in used!'));
    // }
    // get user params id
    const getUserParamsID = req.params.id;

    //check if user id and user params id is not the same
    if (req.user.id !== getUserParamsID) {
        // return error
        return next(errorHandler(401, 'You can only update your own account!'));
    }

    try {
        // get the user password
        let getUserPassword = password;
        // check if password is correct
        if (getUserPassword) {
            //we hash the password;
            getUserPassword = bcryptjs.hashSync(getUserPassword, 10);
        }
        // now update user
        const updatedUser = await User.findByIdAndUpdate(getUserParamsID, {
            $set: {
                username,
                email,
                getUserPassword,
                avatar
            }
        }, {new : true});

        const { password: pass, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
}

export const deleteAccount = async (req, res, next) => {
    const getUserParamsID = req.params.id;

    if (req.user.id !== getUserParamsID) {
        return next(errorHandler(401, 'You can only deleted your account!'));
    }
    try {
        await User.findByIdAndDelete(getUserParamsID);
        res.clearCookie('access_token');
        res.status(200).json('Account has been deleted!');
    } catch (error) {
        next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    
    try {
        const excludePassword = {password : 0};

        const getUsers = await User.find({}, {excludePassword});

        // .sort({createdAt : -1});
        
        res.status(200).json(getUsers);

    } catch (error) {
        next(error)
    }
}