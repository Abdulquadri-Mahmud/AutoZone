import mongoose from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    snippet:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    imageUrl: {
        type: String
    }
}, {timestamps: true});

//Export the model
const Blog = mongoose.model('Blog', blogSchema);

export default Blog;