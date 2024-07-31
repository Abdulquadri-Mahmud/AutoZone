import express from 'express';
import { createAccessory, deleteAccessory,
    getAllAccessory, getSinglAccessory, updateAccessory 
} from '../controller/Accessory-Controller.js';

import { verifyAdmin } from '../utils/verifyUserError.js';

const app = express();

app.post('/create-accessory', verifyAdmin,createAccessory);
app.get('/all-accessory',getAllAccessory);
app.get('/single-accessory/:id',getSinglAccessory);
app.patch('/update-accessory/:id', verifyAdmin,updateAccessory);
app.delete('/delete-accessory/:id', verifyAdmin,deleteAccessory);

export default app;