import express from 'express';
import { addBlog, deleteBlog, getAllBlogs, getSingleBlog, updateBlog } from '../controller/blog-controller.js';
import { verifyAdmin } from '../utils/verifyUserError.js';

const app = express();

app.post('/postBlog', verifyAdmin,addBlog);
app.get('/getAllBlogs', getAllBlogs);
app.get('/getSingleBlog/:id', getSingleBlog);
app.delete('/deleteBlog/:id', verifyAdmin,deleteBlog);
app.patch('/updateBlog/:id', verifyAdmin,updateBlog);

export default app;