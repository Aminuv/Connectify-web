import express from "express";
import { 
    getUsers,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// read all users
router.get("/:id", verifyToken, getUsers);
router.get("/:id/friends", verifyToken, getUserFriends);

// update user friends
router.patch("/:id/friends", verifyToken, addRemoveFriend);

export default router;