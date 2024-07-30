import express from 'express';
import { createAccessory, deleteAccessory,
    getAllAccessory, updateAccessory 
} from '../controller/Accessory-Controller.js';

import { verifyAdmin } from '../utils/verifyUserError.js';

const app = express();

app.post('/create-accessory', verifyAdmin,createAccessory);
app.get('/all-accessory',getAllAccessory);
app.patch('/update-accessory', verifyAdmin,updateAccessory);
app.delete('/delete-accessory', verifyAdmin,deleteAccessory);

export default app;