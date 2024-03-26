import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

// Create a new router
const router = express.Router();

// Read  posts from the database and send them to the client
router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);

// Update a post with like 
router.patch('/:id/like', verifyToken, likePost);

export default router;