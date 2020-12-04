import express from "express";
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// @desc Auth user & get token
// @route POST /api/v1/users/signin
// @access public
router.post("/signin", authUser);

router.route("/profile").get(protect, getUserProfile);

export default router;
