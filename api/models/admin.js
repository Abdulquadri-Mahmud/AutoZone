import mongoose, { model } from "mongoose";

var adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true, 
        unique: true
    }
}, {timestamps: true});

const Admin = mongoose.model('admin', adminSchema);

export default Admin;