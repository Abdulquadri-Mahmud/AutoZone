import express from 'express';
import { addBlog, deleteBlog, getAllBlogs, getSingleBlog, updateBlog } from '../controller/blog-controller.js';

const app = express();

app.post('/postBlog', addBlog);
app.get('/getAllBlogs', getAllBlogs);
app.get('/getSingleBlog/:id', getSingleBlog);
app.delete('/deleteBlog/:id', deleteBlog);
app.patch('/updateBlog/:id', updateBlog);

export default app;