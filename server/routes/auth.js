import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();  // Create a new router

router.post("/login", login);  // Add a new route to the router

export default router;  // Export the router