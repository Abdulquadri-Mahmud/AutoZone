import Blog from "../models/blog.js";
import mongoose from "mongoose";
import { errorHandler } from "../utils/errorHanlder.js";

export const addBlog = (req, res) => {
    const { title, snippet, body, imageUrl } = req.body;

    const blog = new Blog({title, snippet, body, imageUrl});
    blog.save()
        .then((response) => {
            res.status(200).json('Blog created successfully')
        }).catch((error) => {
            console.log(error.message);
            res.status(404).json({error})
        });
}

export const getAllBlogs = async (req, res, next) => {
    const limit = parseInt(req.query.limit) || 3;

    const startIndex = parseInt(req.query.startIndex) || 0;

    try {
        const allBlogs = await Blog.find({}).sort({createdAt: -1})
        .limit(limit).skip(startIndex); 

        res.status(200).json(allBlogs);
        
    } catch (error) {
        next(error)
    }
}

export const getSingleBlog = async (req, res, next) => {
    
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Non Existing Blog!'))
        }
        
        const fetchBlogId = await Blog.findById(id);

        if (!fetchBlogId) {
            return next(errorHandler(404, 'Blog Not Found!'))
        }
        res.status(200).json(fetchBlogId);
    } catch (error) {
        next(error);
    }
}

export const deleteBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Blog can not Found!'));
        }

        const findBlogInDb = await Blog.findOneAndDelete({_id: id});
    
        if (!findBlogInDb) {
            return next(errorHandler(404, 'Blog Not Found!'));
        };

        res.status(200).json('Blog deleted successfully!');

    } catch (error) {
        next(error)
    }
}

export const updateBlog = async (req, res, next) => {

    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(errorHandler(404, 'Blog can not Found!'));
        }
        const getBlogId = await Blog.findOneAndUpdate({_id: id}, {...req.body}).sort({createdAt : -1});

        if (!getBlogId) {
            return next(errorHandler(404, 'Blog Not Found!'));
        }
        res.status(201).json('Blog updated successfully');

    } catch (error) {
        next(error)
    }
}