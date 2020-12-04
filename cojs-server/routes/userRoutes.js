import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// @desc register a new user
// @route POST /api/v1/users
// @access public
router.route("/").post(registerUser);

// @desc Auth user & get token
// @route POST /api/v1/users/signin
// @access public
router.post("/signin", authUser);

// @desc user profile
// @route GET /api/v1/users/signin
// @access private
router.route("/profile").get(protect, getUserProfile);

export default router;
