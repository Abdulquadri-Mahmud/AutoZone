import express from "express";
import { adminController, adminSignIn } from "../controller/admin-controller.js";

const app = express();

app.post('/admin', adminController);
app.post('/adminsignin', adminSignIn);

export default app;