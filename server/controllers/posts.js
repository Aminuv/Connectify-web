import post from '../models/post.js';
import User from '../models/user.js';

// create a new post
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        });
        await newPost.save();
        const post = await post.find();

        res.status(201).json(post);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

// get all posts from the database
export const getFeedPosts = async (req, res) => {
    try {
        const posts = await post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// get a post by id
export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await post.find({ userId });
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
} 

// like a post by id
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await post.findById(id);
        const liked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}