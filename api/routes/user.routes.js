import express from "express";
import { deleteAccount, getAllUsers, updateUser } from "../controller/user.controller.js";
import { verifyAdmin, verifyToken } from "../utils/verifyUserError.js";

const app  = express();

app.patch('/updateUser/:id', verifyToken, updateUser);
app.delete('/deleteUser/:id', verifyToken, deleteAccount);
app.get('/allusers', verifyAdmin,getAllUsers);

export default app;