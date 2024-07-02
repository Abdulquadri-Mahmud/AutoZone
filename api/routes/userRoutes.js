import express from 'express';
import { signOut, signin, signup } from '../controller/userController.js';

const app = express();

app.post('/signup', signup);
app.post('/signin', signin);
app.get('/signout', signOut);


export default app;